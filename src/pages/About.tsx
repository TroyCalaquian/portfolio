import {
  Flex,
  Box,
  Title,
  Text,
  Image,
  Container,
  Stack,
  SimpleGrid,
  Timeline,
  Divider,
} from "@mantine/core";
import profilePic from "../assets/TroyCalaquian.png";
import Point from "../components/iconListPoint";
import skills from "../helper/skills.tsx";
import { usePageAnimation } from "../hooks/usePageAnimation.tsx";
import CTA from "../components/cta.tsx";
import { useTypewriter } from "../hooks/useTypewriter";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function About() {
  const container = usePageAnimation();

  const typeWriterRef = useTypewriter("Troy Calaquian");

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
              I am a programmer who enjoys learning and implementing new
              technologies to create clean, user-friendly applications. I
              believe that codebases shouldn't be too complicated and other
              developers should understand what is happening in their code. I
              also love helping people turn their ideas into reality through
              code. Outside of coding, I enjoy playing video games, especially
              rhythm games, both playing them and listening to the music that
              comes with them.
            </Text>
          </Box>
          <Image
            src={profilePic}
            className="profile-image"
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

        <Divider className="animate-section" size="sm" />

        <Box className="animate-section">
          <Title order={2} mb="lg">
            Technologies and Applications used
          </Title>
          <SimpleGrid cols={5}>
            {Object.values(skills).map((skill) => (
              <Point name={skill.name} icon={skill.icon} />
            ))}
          </SimpleGrid>
        </Box>

        <Divider className="animate-section" size="sm" />

        <Box className="animate-section">
          <Title order={2} mb="lg">
            Experience
          </Title>
          <Timeline
            active={4}
            bulletSize={28}
            lineWidth={2}
            color="mossGreen"
            styles={{
              itemBullet: {
                backgroundColor: "var(--mantine-color-mossGreen-6)",
              },
            }}
          >
            <Timeline.Item
              title="Web Developer"
              bullet={<FaBriefcase size={12} />}
            >
              <Text c="dimmed" size="sm" fw={500}>
                Alpha Ministries Canada · June – August 2025
              </Text>
              <Text size="xs" mt={4}>
                Maintained and updated the guest page for Alpha Ministries
                Canada to help users sign up
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Graduated BCIT CST"
              bullet={<FaGraduationCap size={12} />}
            >
              <Text c="dimmed" size="sm" fw={500}>
                BCIT · June 2024
              </Text>
              <Text size="xs" mt={4}>
                Graduated from BCIT with a diploma in Computer Systems
                Technology with distinction
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Software Developer (Practicum)"
              bullet={<FaBriefcase size={12} />}
            >
              <Text c="dimmed" size="sm" fw={500}>
                Eagle Eyes Search · April – May 2024
              </Text>
              <Text size="xs" mt={4}>
                Created a prototype as part of a feasibility test to validate
                client requirements and guide implementation decisions
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Software Developer (Practicum)"
              bullet={<FaBriefcase size={12} />}
            >
              <Text c="dimmed" size="sm" fw={500}>
                Love Your Planet · January – April 2024
              </Text>
              <Text size="xs" mt={4}>
                Debugged and patched issues in React Native to support ongoing
                development
              </Text>
            </Timeline.Item>
          </Timeline>
        </Box>

        <CTA
          hook="Check out my projects"
          support="See what I've been working on"
          btnString="View Projects"
          redirect="/projects"
        />
      </Stack>
    </Container>
  );
}

export default About;
