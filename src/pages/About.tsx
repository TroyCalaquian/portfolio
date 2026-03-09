import { useState } from "react";
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
  SimpleGrid,
  Timeline,
  Divider,
} from "@mantine/core";
import dummyImg from "../assets/react.svg";
import Point from "../components/iconListPoint";
import skills from "../helper/skills.tsx";

function About() {
  return (
    <Container size="lg" py="xl">
      <Stack gap={80}>
        <Flex justify="space-between" align="center">
          <Box maw={800}>
            <Title order={1}>Troy Calaquian</Title>
            <Text size="lg" mt="md">
              I am a BCIT CST graduate with a passion for building modern web
              applications. I enjoy learning and implementing new technologies
              to create clean, user-friendly applications. I also love helping
              people turn their ideas into reality through code. Outside of
              coding, I enjoy playing video games, especially rhythm games, both playing them and listening to
              the music that comes with them.
            </Text>
          </Box>
          <Image src={dummyImg} alt="Troy portrait" w={250} radius="md" />
        </Flex>

        <Divider size="sm"/>

        <Box>
          <Title order={2} mb="lg">
            Skills
          </Title>
          <SimpleGrid cols={5}>
            {skills.map((skill) => (
              <Point name={skill.name} icon={skill.icon} />
            ))}
          </SimpleGrid>
        </Box>

        <Divider size="sm"/>

        <Box>
          <Title order={2} mb="lg">
            Experience
          </Title>
          <Timeline active={0} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="Web Developer">
              <Text c="dimmed" size="sm">
                Alpha Ministries Canada · June - August 2025
              </Text>
              <Text size="xs">Maintained and updated the guest page for Alpha Ministries Canada to help users sign up</Text>
            </Timeline.Item>
            <Timeline.Item title="Graduated BCIT CST">
              <Text c="dimmed" size="sm">
                BCIT · June 2024
              </Text>
              <Text size="xs">Graduated from BCIT with a diploma in Computer Systems Technology with distinction</Text>
            </Timeline.Item>
            <Timeline.Item title="Software Developer (Practicum)">
              <Text c="dimmed" size="sm">
                Eagle Eyes Search · April - May 2024
              </Text>
              <Text size="xs">Created a prototype as part of a feasibility test to validate client requirements and guide implementation decisions</Text>
            </Timeline.Item>
            <Timeline.Item title="Software Developer (Practicum)">
              <Text c="dimmed" size="sm">
                Love Your Planet · January - April 2024
              </Text>
              <Text size="xs">Debugged and patched issues in React Native to support ongoing development</Text>
            </Timeline.Item>
          </Timeline>
        </Box>
      </Stack>

      {/* Add link to projects page */}


    </Container>
  );
}

export default About;
