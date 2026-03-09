import {
  Flex,
  Box,
  Title,
  Text,
  Image,
  Container,
  Stack,
  Card,
  Badge,
  Group,
  Button,
} from "@mantine/core";
import dummyImg from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Container size="lg" py="xl">
      <Stack gap={80}>
        {/* HERO */}
        <Flex justify="space-between" align="center">
          <Box maw={500}>
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

          <Image src={dummyImg} alt="Troy portrait" w={250} radius="md" />
        </Flex>

        {/* FEATURED PROJECT */}
        <Box>
          <Title order={2} mb="md">
            Featured Project
          </Title>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            {/* IMAGE HERE LATER */}

            <Title order={3}>Chunithm Game Info</Title>

            <Text mt="sm">
              A web application that allows users to search for and view
              information about songs from the rhythm game Chunithm.
            </Text>

            <Text size="sm" mt="md" c="dimmed">
              Technologies: React • Node • HeroUI • TailWindCSS • GSAP •
              SupaBase
            </Text>

            <Group mt="md">
              <Button
                component="a"
                href="https://github.com/TroyCalaquian/rhythm-game-info"
                target="_blank"
                variant="light"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            </Group>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
