import React from 'react';
import { Container, Card, Grid, useMantineTheme } from '@mantine/core';
// import { useConnectedWallet } from "@saberhq/use-solana";
import { useStyles } from '@styles/components/pageWrapper.style';

const PageWrapper = (props: any) => {
    // const wallet = useConnectedWallet();
    const { classes } = useStyles();

    const theme = useMantineTheme();

    const children = props.children;
    const PageHeader = props.PageHeader;
    const PageAction = props.PageAction;

    return (
        <Container>
            <Grid gutter="xl">
                <Grid.Col span={12} className={classes.grid}>
                    <Grid justify="space-between" align="flex-end">
                        <Grid.Col sm={12} md={12} lg={12}>
                            <PageHeader />
                        </Grid.Col>
                        <Grid.Col
                            sm={12}
                            md={12}
                            lg={9}
                            style={{
                                width: '100%',
                                justifyContent: 'flex-end',
                                display: 'inline-flex',
                            }}
                        >
                            <PageAction />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={12}>{children}</Grid.Col>
            </Grid>
        </Container>
    );
};

export default PageWrapper;
