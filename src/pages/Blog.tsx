import { Box, Container, Stack, Title, Text } from "@mantine/core";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { useTypewriter } from "../hooks/useTypewriter";

function Blog() {
  const container = usePageAnimation();
  const typeWriterRef = useTypewriter("Blog");
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
      </Stack>
    </Container>
  );
}

export default Blog;
