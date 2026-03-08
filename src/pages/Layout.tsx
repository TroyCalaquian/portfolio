import {
  AppShell,
  Group,
  Title,
  Anchor,
  Burger,
  AppShellFooter,
  Text,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppShell header={{ height: 70 }} footer={{ height: 70 }} padding="md">
      {/* HEADER (Horizontal Navbar) */}
      <AppShell.Header>
        <Group h="100%" px="lg" justify="space-between">
          {/* Logo / Name */}
          <Anchor component={Link} to="/" underline="never" c="inherit">
            <Title order={4}>Troy Portfolio</Title>
          </Anchor>

          {/* Nav Links */}
          <Group gap="lg">
            {navLinks.map((link) => (
              <Anchor
                key={link.path}
                component={Link}
                to={link.path}
                fw={location.pathname === link.path ? 700 : 500}
                c={location.pathname === link.path ? "blue" : "gray"}
                underline="never"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </AppShell.Header>

      {/* Page Content */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <Container py="md">
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} Troy Calaquian
            </Text>

            <Group gap="md">
              <Anchor
                href="https://github.com/TroyCalaquian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/in/troycalaquian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </Anchor>
            </Group>
          </Group>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
