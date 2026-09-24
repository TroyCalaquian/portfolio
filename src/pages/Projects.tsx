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
  Image,
  Flex,
} from "@mantine/core";
import { useState } from "react";
import projects from "../helper/projectList";
import Point from "../components/iconListPoint";
import { FaSearch } from "react-icons/fa";
import { usePageAnimation } from "../hooks/usePageAnimation";
import CTA from "../components/cta";
import { useTypewriter } from "../hooks/useTypewriter";

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

  const container = usePageAnimation();

  const typeWriterRef = useTypewriter("Projects");

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
            Here are projects that I've done and their respective challenges.
          </Text>
        </Box>

        <TextInput
          leftSection={<FaSearch />}
          placeholder="Search by name or tech used"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="animate-section"
          size="md"
          radius="xl"
          styles={{
            input: {
              backgroundColor:
                "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
              borderColor:
                "light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
              "&:focus": {
                borderColor: "var(--mantine-color-mossGreen-6)",
              },
            },
          }}
        />

        <Stack gap="lg">
          {filteredProjects.map((project) => (
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="animate-section"
              style={{
                backgroundColor:
                  "light-dark(var(--mantine-color-deepGreen-0), var(--mantine-color-deepGreen-9))",
                borderColor:
                  "light-dark(var(--mantine-color-mossGreen-3), var(--mantine-color-mossGreen-8))",
              }}
            >
              <Flex direction={{ base: "column", sm: "row" }} gap="md">
                <Image
                  src={project.image}
                  alt={project.title}
                  radius="md"
                  h={{ base: 200, sm: 300 }}
                  w={{ base: "100%", sm: 500 }}
                  style={{
                    objectFit: "contain",
                    background:
                      "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))",
                  }}
                />
                <Box style={{ flex: 1 }}>
                  <Title order={3} mt="md">
                    {project.title}
                  </Title>
                  <Text mt="sm">{project.description}</Text>

                  <Title order={5} mt="md">
                    Technologies used:
                  </Title>
                  <Group mt="md">
                    {project.tech.map((tech) => (
                      <Point name={tech.name} icon={tech.icon} />
                    ))}
                  </Group>

                  <Group mt="md">
                    <Button
                      component="a"
                      href={project.website}
                      target="_blank"
                      variant="light"
                      rel="noopener noreferrer"
                    >
                      View website
                    </Button>
                    <Button
                      component="a"
                      href={project.github}
                      target="_blank"
                      variant="light"
                      color="blueSlate"
                      rel="noopener noreferrer"
                    >
                      View GitHub repository
                    </Button>
                  </Group>
                </Box>
              </Flex>
            </Card>
          ))}
        </Stack>

        <CTA
          hook="Like what you see?"
          support="Feel free to reach out if you'd like to collaborate"
          btnString="Get in touch"
          redirect="/contact"
        />
      </Stack>
    </Container>
  );
}

export default Projects;
