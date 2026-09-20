import { Card, Title, Text, Group, Button } from "@mantine/core";
import { useAnimatedNavigate } from "../hooks/useAnimatedNavigate";

interface CTAProps {
  hook: string;
  support: string;
  btnString: string;
  redirect: string;
  className?: string;
}

export default function CTA({ hook, support, btnString, redirect }: CTAProps) {
  const navigate = useAnimatedNavigate();

  return (
    <Card
      className="animate-section"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        backgroundColor: "var(--mantine-color-blueSlate-9)",
        borderColor: "var(--mantine-color-blueSlate-6)",
      }}
    >
      <Title order={3} c="gray.0">{hook}</Title>
      <Text mt="sm" c="blueSlate.2">{support}</Text>
      <Group mt="md">
        <Button onClick={() => navigate(redirect)}>{btnString}</Button>
      </Group>
    </Card>
  );
}
