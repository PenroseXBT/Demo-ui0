import { Stack, Text } from '@mantine/core';

export const TitleChild: React.FC<any> = ({ title, children, className, stackClassName }) => {
    return (
        <Stack className={stackClassName}>
            <Text className={className}>{title}</Text>
            {children}
        </Stack>
    );
};
