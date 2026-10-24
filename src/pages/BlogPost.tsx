import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Anchor,
  Badge,
  Box,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import supabase from "../helper/supabaseClient";
import { formatDate, wasEdited, type Post } from "../helper/blog";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate";

type Status = "loading" | "ready" | "notFound" | "error";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const container = usePageAnimation();
  const navigate = useAnimatedNavigate();

  // Remember which slug each result belongs to, so "loading" can be derived
  // instead of set inside the effect.
  const [result, setResult] = useState<{
    slug: string;
    post: Post | null;
    failed: boolean;
  } | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    supabase
      .from("posts")
      .select("slug,title,excerpt,content,tags,published_at,updated_at")
      .eq("slug", slug)
      .maybeSingle() // no matching row -> data is null, not an error
      .then(({ data, error }) => {
        if (cancelled) return;
        setResult({ slug, post: data, failed: !!error });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // A result only counts if it's for the slug currently in the URL.
  const current = result && result.slug === slug ? result : null;
  const status: Status = !current
    ? "loading"
    : current.failed
      ? "error"
      : current.post
        ? "ready"
        : "notFound";
  const post = current?.post ?? null;

  // Show the post title in the browser tab while reading it.
  useEffect(() => {
    if (!post) return;
    const previous = document.title;
    document.title = `${post.title} | Troy's Portfolio`;
    return () => {
      document.title = previous;
    };
  }, [post]);

  return (
    <Container ref={container} className="page-container" size="md" py="xl">
      <Stack gap="xl">
        <Box className="animate-section">
          <Anchor
            underline="never"
            c="dimmed"
            size="sm"
            onClick={() => navigate("/blog")}
            style={{ cursor: "pointer" }}
          >
            ← Back to blog
          </Anchor>
        </Box>

        {status === "loading" && <Text c="dimmed">Loading post...</Text>}
        {status === "error" && (
          <Text c="red">Couldn't load this post. Try again later.</Text>
        )}
        {status === "notFound" && (
          <Box>
            <Title order={2}>Post not found</Title>
            <Text c="dimmed" mt="sm">
              It may have moved, or it isn't published yet.
            </Text>
          </Box>
        )}

        {status === "ready" && post && (
          <Box component="article">
            <Title order={1}>{post.title}</Title>

            <Text size="sm" c="dimmed" mt="xs">
              {formatDate(post.published_at)}
              {wasEdited(post) && ` · Updated ${formatDate(post.updated_at)}`}
            </Text>

            <Group mt="sm" gap="xs">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="light">
                  {tag}
                </Badge>
              ))}
            </Group>

            <div className="blog-content" style={{ marginTop: "2rem" }}>
              {/* The page title is the h1, so demote any # in the markdown. */}
              <ReactMarkdown components={{ h1: "h2" }}>
                {post.content}
              </ReactMarkdown>
            </div>
          </Box>
        )}
      </Stack>
    </Container>
  );
}

export default BlogPost;