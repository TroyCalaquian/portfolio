import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Divider,
} from "@mantine/core";
import { FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { useTypewriter } from "../hooks/useTypewriter";

function Contact() {
  const container = usePageAnimation();

  const typeWriterRef = useTypewriter("Contact me!");

  return (
    <Container ref={container} className="page-container" size="lg" py="xl">
      <Stack gap={40}>
        <Box className="animate-section">
          <Title order={1}>
            <span ref={typeWriterRef}></span>
            <span className="terminal-cursor" aria-hidden="true">
              _
            </span>
          </Title>

          <Text size="lg" mt="md">
            Feel free to email me or connect with me on LinkedIn!
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2 }} className="animate-section">
          <Card
            className="contact-card"
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            href="mailto:trcalaquian@gmail.com"
            withBorder
            c="gray.0"
            style={{
              backgroundColor: "var(--mantine-color-blueSlate-9)",
              borderColor: "var(--mantine-color-blueSlate-6)",
            }}
          >
            <FaEnvelope size={60} />
            <Title order={3} mt="sm">
              Email
            </Title>
            <Text mt="sm">trcalaquian@gmail.com</Text>
          </Card>
          <Card
            className="contact-card"
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/troycalaquian"
            withBorder
            c="gray.0"
            style={{
              backgroundColor: "var(--mantine-color-blueSlate-9)",
              borderColor: "var(--mantine-color-blueSlate-6)",
            }}
          >
            <FaLinkedin size={60} />
            <Title order={3} mt="sm">
              LinkedIn
            </Title>
            <Text mt="sm">linkedin.com/in/troycalaquian</Text>
          </Card>
        </SimpleGrid>

        <Divider className="animate-section" my="xs" />

        <Title order={2} className="animate-section">
          Want to see my resume?
        </Title>

        <Box maw={550} className="animate-section">
          <Card
            className="contact-card"
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            href="/TroyCalaquian_Resume.pdf"
            download="TroyCalaquian_Resume.pdf"
            withBorder
            c="gray.0"
            style={{
              backgroundColor: "var(--mantine-color-blueSlate-9)",
              borderColor: "var(--mantine-color-blueSlate-6)",
            }}
          >
            <FaFileAlt size={60} />
            <Title order={3} mt="sm">
              Download it here!
            </Title>
            <Text mt="sm">
              View my full work, history, skills, and experience in detail
            </Text>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}

export default Contact;
