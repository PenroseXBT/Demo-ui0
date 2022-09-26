import { TitleChild } from 'src/components/TitleChild';
import { GradientBorderBox } from 'src/components/GradientBorderBox';
import { useStyles } from 'src/styles/components/dashboard.style';
import { Text, Button, Grid, useMantineTheme, Stack, Group } from '@mantine/core';
import { HorizontalSpacer, VerticleSpacer } from 'src/components/GradientSpacer';

interface MarketSection {
    title: string;
    value: string | number;
}

interface MarketOverviewProps {
    title: string;
    topLeftInfo: MarketSection;
    bottomLeftInfo: MarketSection;
    topRightInfo: MarketSection;
    bottomRightInfo: MarketSection;
}

export const MarketOverview = ({
    title,
    topLeftInfo,
    bottomLeftInfo,
    topRightInfo,
    bottomRightInfo,
}: MarketOverviewProps) => {
    const { classes } = useStyles();

    return (
        <GradientBorderBox extraClasses="flex">
            <Stack className={classes.marketContainer}>
                <Text className={classes.marketTitle}>{title}</Text>
                <Group className={classes.marketInner}>
                    <Stack className={classes.marketHalf}>
                        <TitleChild
                            title={topLeftInfo.title}
                            className={classes.overviewSectionTitle}
                            stackClassName={classes.overviewSection}
                        >
                            <Text className={classes.overviewSectionContent}>{topLeftInfo.value}</Text>
                        </TitleChild>
                        <TitleChild
                            title={bottomLeftInfo.title}
                            className={classes.overviewSectionTitle}
                            stackClassName={classes.overviewSection}
                        >
                            <Text className={classes.overviewSectionContent}>{bottomLeftInfo.value}</Text>
                        </TitleChild>
                    </Stack>
                    <VerticleSpacer />
                    <Stack className={`${classes.marketHalf} right`}>
                        <TitleChild
                            title={topRightInfo.title}
                            className={classes.overviewSectionTitle}
                            stackClassName={classes.overviewSection}
                        >
                            <Text className={classes.overviewSectionContent}>{topRightInfo.value}</Text>
                        </TitleChild>
                        <TitleChild
                            title={bottomRightInfo.title}
                            className={classes.overviewSectionTitle}
                            stackClassName={classes.overviewSection}
                        >
                            <Text className={classes.overviewSectionContent}>{bottomRightInfo.value}</Text>
                        </TitleChild>
                    </Stack>
                </Group>
            </Stack>
        </GradientBorderBox>
    );
};
