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

function About() {
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
            <Title order={1}>Troy Calaquian</Title>
            <Text size="lg" mt="md">
              I am a BCIT CST graduate with a passion for building modern web
              applications. I enjoy learning and implementing new technologies
              to create clean, user-friendly applications. I also love helping
              people turn their ideas into reality through code. Outside of
              coding, I enjoy playing video games, especially rhythm games, both
              playing them and listening to the music that comes with them.
            </Text>
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

        <Divider className="animate-section" size="sm" />

        <Box className="animate-section">
          <Title order={2} mb="lg">
            Skills
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
          <Timeline active={0} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="Web Developer">
              <Text c="dimmed" size="sm">
                Alpha Ministries Canada · June - August 2025
              </Text>
              <Text size="xs">
                Maintained and updated the guest page for Alpha Ministries
                Canada to help users sign up
              </Text>
            </Timeline.Item>
            <Timeline.Item title="Graduated BCIT CST">
              <Text c="dimmed" size="sm">
                BCIT · June 2024
              </Text>
              <Text size="xs">
                Graduated from BCIT with a diploma in Computer Systems
                Technology with distinction
              </Text>
            </Timeline.Item>
            <Timeline.Item title="Software Developer (Practicum)">
              <Text c="dimmed" size="sm">
                Eagle Eyes Search · April - May 2024
              </Text>
              <Text size="xs">
                Created a prototype as part of a feasibility test to validate
                client requirements and guide implementation decisions
              </Text>
            </Timeline.Item>
            <Timeline.Item title="Software Developer (Practicum)">
              <Text c="dimmed" size="sm">
                Love Your Planet · January - April 2024
              </Text>
              <Text size="xs">
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
