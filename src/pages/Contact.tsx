import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Button,
  Divider,
} from "@mantine/core";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";

function Contact() {
  return (
    <Container size="lg" py="xl">
      <Stack gap={40}>
        <Box>
          <Title order={1}>Contact Me!</Title>

          <Text size="lg" mt="md">
            Feel free to email me or connect with me on LinkedIn!
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
            <Title order={3} mt="sm">
              Email
            </Title>
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
            <Title order={3} mt="sm">
              LinkedIn
            </Title>
            <Text mt="sm">linkedin.com/in/troycalaquian</Text>
          </Card>
        </SimpleGrid>

        <Divider my="xs" />

        <Title order={2}>Want to see my resume?</Title>

        <Box maw={550}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            component="a"
            href="/TroyCalaquian_resume.pdf"
            download="TroyCalaquian_Resume.pdf"
            withBorder
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
