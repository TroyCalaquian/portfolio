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
} from "@mantine/core";
import dummyImg from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiHeroui } from "react-icons/si";
import Skill from "../components/SkillPoint";
import skills from "../helper/Skills";

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
              coding, I enjoy rhythm games, both playing them and listening to
              the music that comes with them.
            </Text>
          </Box>
          <Image src={dummyImg} alt="Troy portrait" w={250} radius="md" />
        </Flex>

        <Box>
          <Title order={2} mb="md">
            Skills
          </Title>
          <SimpleGrid cols={5}>
            {skills.map((skill) => (
              <Skill name={skill.name} icon={skill.icon} />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}

export default About;
