import { TitleChild } from 'src/components/TitleChild';
import { GradientBorderBox } from 'src/components/GradientBorderBox';
import { useStyles } from 'src/styles/components/dashboard.style';
import { Text, Button, Grid, useMantineTheme, Stack, Group, Col, Switch } from '@mantine/core';
import { HorizontalSpacer, VerticleSpacer } from 'src/components/GradientSpacer';
import { ReactNode } from 'react';
import Image from 'next/image';

export const SupplyMarketRow = () => {
    const { classes } = useStyles();

    return (
        <GradientBorderBox extraClassesOuter="no-radius" extraClassesInner="no-radius" extraClasses="fix-last">
            <Grid columns={5} className={classes.tableRowContainer}>
                <Col span={2} className={classes.tableRowCol}>
                    <Group>
                        <Image
                            width={40}
                            height={31}
                            layout="fixed"
                            src="/images/core/solana-sol-logo.svg"
                            alt="particles logo"
                        />
                        <Text>Solana</Text>
                    </Group>
                </Col>
                <Col span={1} className={classes.tableRowCol}>
                    0.62%
                </Col>
                <Col span={1} className={classes.tableRowCol}>
                    12.89 SOL
                </Col>
                <Col span={1} className={classes.tableRowCol}>
                    <Switch />
                </Col>
            </Grid>
        </GradientBorderBox>
    );
};
