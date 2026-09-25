import {
  Flex,
  Box,
  Title,
  Text,
  Container,
  Stack,
  Card,
  Group,
  Button,
  Anchor,
  Badge,
} from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { useTypewriter } from "../hooks/useTypewriter";
import { EqualizerAvatar } from "../components/equalizerAvatar";

function App() {
  const navigate = useAnimatedNavigate();
  const container = usePageAnimation();
  const typeWriterRef = useTypewriter("Hi, I'm Troy!");

  const techStack = [
    "React",
    "Node",
    "HeroUI",
    "TailwindCSS",
    "GSAP",
    "Supabase",
  ];

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
            <Title order={1}>
              <span ref={typeWriterRef}></span>
              <span className="terminal-cursor" aria-hidden="true">
                _
              </span>
            </Title>

            <Text size="lg" mt="md">
              I'm a programmer who loves building clean, user-friendly
              applications while learning and implementing different
              technologies.
            </Text>

            <Group mt="lg" gap="md">
              <Anchor
                href="https://github.com/TroyCalaquian"
                target="_blank"
                rel="noopener noreferrer"
                c="inherit"
                className="icon-link"
              >
                <FaGithub size={26} />
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/in/troycalaquian/"
                target="_blank"
                rel="noopener noreferrer"
                c="inherit"
                className="icon-link"
              >
                <FaLinkedin size={26} />
              </Anchor>
            </Group>
          </Box>

          <EqualizerAvatar />
        </Flex>

        <Box className="animate-section">
          <Title order={2} mb="md">
            Featured Project
          </Title>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="hover-lift"
            style={{
              backgroundColor:
                "light-dark(var(--mantine-color-deepGreen-0), var(--mantine-color-deepGreen-9))",
              borderColor:
                "light-dark(var(--mantine-color-mossGreen-3), var(--mantine-color-mossGreen-8))",
            }}
          >
            <Title order={3}>Chunithm Game Info</Title>

            <Text mt="sm">
              A web application that allows users to search for and view
              information about songs from the rhythm game Chunithm.
            </Text>

            <Group mt="md" gap="xs">
              {techStack.map((tech) => (
                <Badge key={tech} variant="light" color="mossGreen">
                  {tech}
                </Badge>
              ))}
            </Group>

            <Group mt="md" align="center">
              <Button
                component="a"
                href="https://warm-mooncake-33e06b.netlify.app/"
                target="_blank"
                variant="light"
                rel="noopener noreferrer"
              >
                View website
              </Button>

              <Button
                c="a"
                onClick={() => navigate("/projects")}
                variant="light"
                color="blueSlate"
                size="sm"
              >
                See all projects
              </Button>
            </Group>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
