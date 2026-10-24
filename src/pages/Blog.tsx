import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  Card,
  Group,
  Badge,
  Button,
} from "@mantine/core";
import { usePageAnimation } from "../hooks/usePageAnimation.tsx";
import { useTypewriter } from "../hooks/useTypewriter";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate.tsx";
import { formatDate, wasEdited, type PostSummary } from "../helper/blog.tsx";
import supabase from "../helper/supabaseClient.tsx";

function Blog() {
  const container = usePageAnimation();
  const typeWriterRef = useTypewriter("Blog");
  const navigate = useAnimatedNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    supabase
      .from("posts")
      .select("slug,title,excerpt,tags,published_at,updated_at")
      .order("published_at", { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (fetchError) setError(true);
        else setPosts(data ?? []);
        setLoading(false);
      });
  }, []);

  // Tags come from the posts themselves, so new tags appear automatically.
  const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort();
  const visiblePosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  const selectTag = (tag: string | null) =>
    setSearchParams(tag ? { tag } : {}, { replace: true });

  return (
    <Container ref={container} className="page-container" size="lg" py="xl">
      <Stack gap={80}>
        <Box className="animate-section">
          <Title order={1}>
            <span ref={typeWriterRef}></span>
            <span className="terminal-cursor" aria-hidden="true">
              _
            </span>
          </Title>

          <Text size="lg" mt="md">
            A collection of my thoughts
          </Text>
        </Box>

        <Stack gap="lg">
          {allTags.length > 0 && (
            <Group gap="xs">
              <Button
                size="compact-sm"
                radius="xl"
                tt="uppercase"
                variant={activeTag === null ? "light" : "default"}
                aria-pressed={activeTag === null}
                onClick={() => selectTag(null)}
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  size="compact-sm"
                  radius="xl"
                  tt="uppercase"
                  variant={activeTag === tag ? "light" : "default"}
                  aria-pressed={activeTag === tag}
                  onClick={() => selectTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </Group>
          )}

          {loading && <Text c="dimmed">Loading posts...</Text>}
          {error && <Text c="red">Couldn't load posts. Try again later.</Text>}
          {!loading && !error && posts.length === 0 && (
            <Text c="dimmed">No posts yet. Check back soon!</Text>
          )}
          {!loading &&
            !error &&
            posts.length > 0 &&
            visiblePosts.length === 0 && (
              <Text c="dimmed">No posts tagged "{activeTag}" yet.</Text>
            )}

          {visiblePosts.map((post) => (
            <Card
              key={post.slug}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="hover-lift"
              onClick={() => navigate(`/blog/${post.slug}`)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  "light-dark(var(--mantine-color-blueSlate-0), var(--mantine-color-blueSlate-9))",
                borderColor:
                  "light-dark(var(--mantine-color-blueSlate-3), var(--mantine-color-blueSlate-6))",
              }}
            >
              <Title order={3}>{post.title}</Title>
              <Text size="sm" c="dimmed" mt={4}>
                {formatDate(post.published_at)}
                {wasEdited(post) && ` · Updated ${formatDate(post.updated_at)}`}
              </Text>
              {post.excerpt && <Text mt="sm">{post.excerpt}</Text>}
              <Group mt="md" gap="xs">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="light">
                    {tag}
                  </Badge>
                ))}
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Blog;
