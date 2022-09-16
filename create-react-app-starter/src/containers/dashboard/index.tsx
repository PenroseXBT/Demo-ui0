import React, { useEffect } from 'react';
import { Text, Button, Grid, useMantineTheme, Stack, Group, Radio, NumberInput } from '@mantine/core';
import PageWrapper from '@wrappers/PageWrapper';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';

const RafflesCreateContainer = () => {
    const router = useRouter();
    const theme = useMantineTheme();

    const { publicKey } = useWallet();
    return (
        <PageWrapper
            PageHeader={() => (
                <Button
                    onClick={() => router.replace('/raffles/admin')}
                    type="button"
                    variant="subtle"
                    color={theme.colors.gray[9]}
                    radius="md"
                >
                    <Text size="xl" color={theme.colors.gray[9]}>
                        ← Back to Manage Raffles
                    </Text>
                </Button>
            )}
            PageAction={() => null}
        ></PageWrapper>
    );
};

export default RafflesCreateContainer;
