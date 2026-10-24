export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string | null;
  tags: string[];
  published_at: string;
  updated_at: string;
};

export type Post = PostSummary & { content: string };

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

// Publishing a draft bumps updated_at at the same moment, so only treat
// a post as "edited" when updated_at is meaningfully later.
export const wasEdited = (
  post: Pick<PostSummary, "published_at" | "updated_at">,
) =>
  new Date(post.updated_at).getTime() -
    new Date(post.published_at).getTime() >
  60_000;