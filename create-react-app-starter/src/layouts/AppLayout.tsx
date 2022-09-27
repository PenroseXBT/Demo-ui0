import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MantineProvider, AppShell, Navbar, Header as HeaderWrapper, Footer, useMantineTheme } from '@mantine/core';

// import components
import Header from 'src/components/Header/';
// import SideNavBar from "@/components/SideNavBar/SideNavBar";

const AppLayout: React.FC<any> = ({ children }) => {
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const theme = useMantineTheme();

    const handleNavigation = (path: string) => {
        router.replace(path);
    };

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colors: {
                    white: ['#FFFFFF'],
                },
            }}
        >
            <AppShell
                navbarOffsetBreakpoint="md"
                asideOffsetBreakpoint="md"
                fixed
                padding={0}
                zIndex={0}
                header={
                    <HeaderWrapper height={80}>
                        <Header action={() => null} opened={opened} onClickBurger={() => setOpened((o) => !o)} />
                    </HeaderWrapper>
                }
                styles={(theme) => ({
                    main: {
                        backgroundColor: '#1C2442',
                        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                            paddingLeft: 0,
                        },
                    },
                })}
            >
                {children}
            </AppShell>
        </MantineProvider>
    );
};

export default AppLayout;
