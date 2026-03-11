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

  return (
    <Container ref={container} className="page-container" size="lg" py="xl">
      <Stack gap={80}>
        <Box className="animate-section">
          <Title order={1}>Projects</Title>

          <Text size="lg" mt="md">
            Here are some of the things that I've built that I'm proud of!
          </Text>
        </Box>

        {/* Add photo of each website*/}

        {/* Add search bar to filter projects by tech stack */}
        <TextInput
          leftSection={<FaSearch />}
          placeholder="Search by name or tech used"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="animate-section"
        />

        <Stack gap="lg">
          {filteredProjects.map((project) => (
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="animate-section"
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap="md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  radius="md"
                  h={{ base: 200, sm: 300 }}
                  w={{ base: "100%", sm: 300 }}
                  style={{ objectFit: "cover" }}
                />
                <Box style={{ flex: 1 }}>
                  <Title order={3} mt="md">
                    {project.title}
                  </Title>
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
                </Box>
              </Flex>
              {/* <Image src={project.image} alt={project.title} radius="md" h={200} style={{ objectFit: "cover" }} />
              <Title order={3} mt="md">{project.title}</Title>
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
              </Group> */}
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
