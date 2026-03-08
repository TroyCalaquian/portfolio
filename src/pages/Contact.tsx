import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <Container size="lg" py="xl">
      <Stack gap={40}>
        <Box maw={500}>
          <Title order={1}>Contact Me</Title>

          <Text size="lg" mt="md">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me via email or social media.
          </Text>
        </Box>

        <SimpleGrid cols={2}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            href="mailto:trcalaquian@gmail.com"
            withBorder
          >
            <FaEnvelope size={60} />
            <Title order={3}>Email</Title>
            <Text mt="sm">trcalaquian@gmail.com</Text>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/troycalaquian"
            withBorder
          >
            <FaLinkedin size={60} />
            <Title order={3}>LinkedIn</Title>
            <Text mt="sm">linkedin.com/in/troycalaquian</Text>
          </Card>
        </SimpleGrid>
        <Box maw={500}>
          <Title order={2}>Want to see my resume?</Title>
          <Button mt="md" component="a" href="/TroyCalaquian_resume.pdf" download="TroyCalaquian_Resume.pdf">
            Download Resume
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Contact;
