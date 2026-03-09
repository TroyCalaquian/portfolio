import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  Card,
  Group,
  Button,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import projects from "../helper/projectList";
import Point from "../components/iconListPoint";
import { FaSearch } from "react-icons/fa";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    );
  });

  return (
    <Container size="lg" py="xl">
      <Stack gap={80}>
        <Box>
          <Title order={1}>Projects</Title>

          <Text size="lg" mt="md">
            Here are some of the things that I've built that I'm proud of!
          </Text>
        </Box>

        {/* Add photo of each website*/}

        {/* Add search bar to filter projects by tech stack */}
        <TextInput
          leftSection={<FaSearch />}
          placeholder="Search projects"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Stack gap="lg">
          {filteredProjects.map((project) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{project.title}</Title>
              <Text mt="sm">{project.description}</Text>

              <Title order={5} mt="md">
                Tech Stack
              </Title>
              <Group mt="md">
                {project.tech.map((tech) => (
                  <Point name={tech.name} icon={tech.icon} />
                ))}
              </Group>

              <Group mt="md">
                <Button
                  component="a"
                  href={project.link}
                  target="_blank"
                  variant="light"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>

      {/* Add link to contacts page */}
    </Container>
  );
}

export default Projects;
