import React, { useEffect } from 'react';
import { Text, Button, Grid, useMantineTheme, Stack, Group, Radio, NumberInput } from '@mantine/core';
import Image from 'next/image';

import PageWrapper from 'src/wrappers/PageWrapper';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { GradientBorderBox } from 'src/components/GradientBorderBox';
import { useStyles } from 'src/styles/components/dashboard.style';
import { HorizontalSpacer, VerticleSpacer } from 'src/components/GradientSpacer';
import { TitleChild } from 'src/components/TitleChild';

const UltraDashboardContainer = () => {
    const router = useRouter();
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const { publicKey } = useWallet();
    return (
        <PageWrapper PageHeader={() => <></>} PageAction={() => null}>
            <Stack>
                <GradientBorderBox>
                    <Group className={classes.overviewContainer}>
                        <Group className={classes.overviewInner}>
                            <Stack className={classes.overviewHalf}>
                                <TitleChild
                                    title="Supply Rate"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={classes.overviewSection}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>
                                <HorizontalSpacer />

                                <TitleChild
                                    title="Borrow Rate"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={classes.overviewSection}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>
                            </Stack>
                            <Image
                                width={196}
                                height={196}
                                layout="fixed"
                                src="/images/core/overview-art.svg"
                                alt="particles logo"
                            />

                            <Stack className={`${classes.overviewHalf} right`}>
                                <TitleChild
                                    title="Exchange Rate"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={`${classes.overviewSection} right`}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>
                                <HorizontalSpacer />

                                <TitleChild
                                    title="Liquidation Threshhold"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={`${classes.overviewSection} right`}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>
                            </Stack>
                            <VerticleSpacer />

                            <Stack className={`${classes.overviewHalf} outer`}>
                                <TitleChild
                                    title="Supply"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={`${classes.overviewSection} outer`}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>

                                <TitleChild
                                    title="Borrow Limit"
                                    className={classes.overviewSectionTitle}
                                    stackClassName={`${classes.overviewSection} outer`}
                                >
                                    <Text className={classes.overviewSectionContent}>$0.00</Text>
                                </TitleChild>
                            </Stack>
                        </Group>
                    </Group>
                </GradientBorderBox>
            </Stack>
        </PageWrapper>
    );
};

export default UltraDashboardContainer;
