import React from 'react';
import Image from 'next/image';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { Button, Anchor, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { HeaderOptions } from 'src/constants/header.constants';

import { useStyles } from 'src/styles/components/header.style';
import { GradientBorderBox } from 'src/components/GradientBorderBox';
require('src/App.scss');

interface Props {
    action?: any;
    opened?: boolean;
    onClickBurger?: any;
}

const Header: React.FC<Props> = ({ action, opened = false, onClickBurger }) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <header className={classes.headerContainer}>
            <div className={classes.logoContainer} onClick={() => window?.open('https://particlesnft.io/', '_blank')}>
                <Image width={48} height={58} layout="fixed" src="/images/core/rune.svg" alt="particles logo" />
                <Text className={classes.logoText}>Ultra</Text>
                <Text className={classes.dashboardText}>Dashboard</Text>
            </div>
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <div className={classes.menuItemContainer}>
                    <Text color="gray.0" className={classes.runeText}>
                        Rune Protocol
                    </Text>
                    <GradientBorderBox>
                        <Button className={classes.solanaButton}>
                            <Text className={classes.solanaButtonText}>Solana</Text>
                        </Button>
                    </GradientBorderBox>
                    <div className={classes.menuItemWrapper}>
                        <WalletMultiButton />
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                    opened={opened}
                    onClick={onClickBurger}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                    style={{ marginRight: 0 }}
                />
            </MediaQuery>
        </header>
    );
};

export default Header;
