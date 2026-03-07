import {Stack, Text} from "@mantine/core"

interface SkillProps {
    name: string;
    icon: React.ReactNode;
}

export default function Skill({name, icon}: SkillProps) {
    return (
        <Stack align="center">
            {icon}
            <Text>{name}</Text>
        </Stack>
    )
}