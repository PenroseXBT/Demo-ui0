import React, { useEffect } from 'react';
import { Text, Button, Grid, useMantineTheme, Stack, Group, Radio, NumberInput } from '@mantine/core';
import Image from 'next/image';

import PageWrapper from 'src/wrappers/PageWrapper';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useStyles } from 'src/styles/components/dashboard.style';
import { DashboardOverview } from 'src/components/DashboardOverview';
import { MarketOverview } from 'src/components/MarketOverview';
import { SupplyMarketRow, TableContainer, BorrowMarketRow } from 'src/components/MarketTable';

const UltraDashboardContainer = () => {
    const router = useRouter();
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const { publicKey } = useWallet();
    return (
        <PageWrapper PageHeader={() => <></>} PageAction={() => null}>
            <Stack>
                <DashboardOverview />
                <Text className={classes.sectionHeader}>Markets</Text>
                <Group className={classes.marketsContainer}>
                    <MarketOverview
                        title="Market Overview"
                        topLeftInfo={{
                            title: 'Total Supply',
                            value: '$0.00',
                        }}
                        bottomLeftInfo={{
                            title: 'Total Staked',
                            value: '$0.00',
                        }}
                        topRightInfo={{
                            title: 'Total Locked',
                            value: '$0.00',
                        }}
                        bottomRightInfo={{
                            title: 'Total Borrowed',
                            value: '$0.00',
                        }}
                    />
                    <MarketOverview
                        title="Balances"
                        topLeftInfo={{
                            title: 'Supply',
                            value: '$0.00',
                        }}
                        bottomLeftInfo={{
                            title: 'Staked',
                            value: '$0.00',
                        }}
                        topRightInfo={{
                            title: 'Borrow',
                            value: '$0.00',
                        }}
                        bottomRightInfo={{
                            title: 'Borrow Limit',
                            value: '$0.00',
                        }}
                    />
                    <MarketOverview
                        title="APY"
                        topLeftInfo={{
                            title: 'Supply',
                            value: '0.00%',
                        }}
                        bottomLeftInfo={{
                            title: 'Staking',
                            value: '0.00%',
                        }}
                        topRightInfo={{
                            title: 'Borrow',
                            value: '0.00%',
                        }}
                        bottomRightInfo={{
                            title: 'Net APY',
                            value: '0.00%',
                        }}
                    />
                </Group>
                <Group>
                    <TableContainer
                        tableItems={[<SupplyMarketRow />, <SupplyMarketRow />]}
                        title="Supply Market"
                        headers={['Asset', 'APY', 'Wallet', 'Collateral']}
                    />

                    <TableContainer
                        tableItems={[<BorrowMarketRow />, <BorrowMarketRow />]}
                        title="Borrow Market"
                        headers={['Asset', 'APY', 'Wallet', 'Liquidity']}
                    />
                </Group>
            </Stack>
        </PageWrapper>
    );
};

export default UltraDashboardContainer;
