import {Stack, Text} from "@mantine/core"

interface pointProps {
    name: string;
    icon: React.ReactNode;
}

export default function Point({name, icon}: pointProps) {
    return (
        <Stack align="center">
            {icon}
            <Text>{name}</Text>
        </Stack>
    )
}