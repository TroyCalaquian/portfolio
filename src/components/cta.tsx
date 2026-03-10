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
    <Card className="animate-section" shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>{hook}</Title>
      <Text mt="sm">{support}</Text>
      <Group mt="md">
        <Button onClick={() => navigate(redirect)}>{btnString}</Button>
      </Group>
    </Card>
  );
}
