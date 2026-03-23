import {
  Flex,
  Box,
  Title,
  Text,
  Image,
  Container,
  Stack,
  Card,
  Group,
  Button,
  Anchor,
} from "@mantine/core";
import profilePic from "../assets/TroyCalaquian.png";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate";
import { usePageAnimation } from "../hooks/usePageAnimation";

function App() {
  const navigate = useAnimatedNavigate();

  const container = usePageAnimation();

  return (
    <Container ref={container} className="page-container" size="lg" py="xl">
      <Stack gap={80}>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column-reverse", sm: "row" }}
          gap={{ base: "xl", sm: 0 }}
          className="animate-section"
        >
          <Box maw={{ base: "100%", sm: 500 }}>
            <Title order={1}>Hi, I'm Troy!</Title>

            <Text size="lg" mt="md">
              BCIT CST graduate building modern web applications.
            </Text>

            <Group mt="lg">
              <Button onClick={() => navigate("/about")}>About Me</Button>
              <Button variant="outline" onClick={() => navigate("/contact")}>
                Contact Me
              </Button>
            </Group>
          </Box>

          <Image
            src={profilePic}
            alt="Troy portrait"
            w={250}
            h={250}
            radius="50%"
            style={{
              objectFit: "cover",
              border: "3px solid #39ff14",
            }}
          />
        </Flex>

        <Box className="animate-section">
          <Title order={2} mb="md">
            Featured Project
          </Title>

          <Card shadow="sm" padding="lg" radius="md" withBorder>

            <Title order={3}>Chunithm Game Info</Title>

            <Text mt="sm">
              A web application that allows users to search for and view
              information about songs from the rhythm game Chunithm.
            </Text>

            <Text size="sm" mt="md" c="dimmed">
              Technologies: React • Node • HeroUI • TailWindCSS • GSAP •
              SupaBase
            </Text>

            <Group mt="md" align="center">
              <Button
                component="a"
                href="https://github.com/TroyCalaquian/rhythm-game-info"
                target="_blank"
                variant="light"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>

              <Anchor
                underline="never"
                c="inherit"
                onClick={() => navigate("/projects")}
                style={{ cursor: "pointer" }}
                size="sm"
              >
                See all projects →
              </Anchor>
            </Group>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
