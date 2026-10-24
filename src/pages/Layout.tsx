import {
  AppShell,
  Group,
  Title,
  Anchor,
  Burger,
  Container,
  ActionIcon,
  Stack,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate";
import { BootSequence } from "../components/bootSequence";

// Defined once, outside the component, since it never changes.
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useAnimatedNavigate();

  const [opened, { toggle: toggleNav, close: closeNav }] = useDisclosure();
  const [booted, setBooted] = useState(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");

  // "/blog/some-post" should still highlight "Blog". Home needs an exact
  // match, since every path starts with "/".
  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  // Shared by the desktop header and the mobile navbar.
  const renderNavLinks = (onNavigate?: () => void) =>
    navLinks.map((link) => (
      <Anchor
        key={link.path}
        fw={isActive(link.path) ? 700 : 500}
        c={isActive(link.path) ? "mossGreen" : "gray"}
        underline="never"
        onClick={() => {
          navigate(link.path);
          onNavigate?.();
        }}
        style={{ cursor: "pointer" }}
      >
        {link.label}
      </Anchor>
    ));

  const colorSchemeToggle = (
    <ActionIcon
      variant="subtle"
      onClick={toggleColorScheme}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
    </ActionIcon>
  );

  return (
    <>
      <BootSequence onComplete={() => setBooted(true)} />
      <AppShell
        header={{ height: 70 }}
        footer={{ height: 70 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: true },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="lg" justify="space-between">
            <Anchor
              underline="never"
              c="inherit"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <Title order={4}>Troy's Portfolio</Title>
            </Anchor>

            <Burger opened={opened} onClick={toggleNav} hiddenFrom="sm" />

            <Group gap="lg" visibleFrom="sm">
              {renderNavLinks()}
              {colorSchemeToggle}
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Stack gap="xs">
            {renderNavLinks(closeNav)}
            {colorSchemeToggle}
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>{booted && <Outlet />}</AppShell.Main>

        <AppShell.Footer>
          <Container py="md">
            <Group gap="md">
              <Anchor
                href="https://github.com/TroyCalaquian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/in/troycalaquian/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Anchor>
            </Group>
          </Container>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}