import { TitleChild } from 'src/components/TitleChild';
import { GradientBorderBox } from 'src/components/GradientBorderBox';
import { useStyles } from 'src/styles/components/dashboard.style';
import { Text, Button, Grid, useMantineTheme, Stack, Group, Col } from '@mantine/core';
import { HorizontalSpacer, VerticleSpacer } from 'src/components/GradientSpacer';
import { ReactNode } from 'react';

interface TableContainerProps {
    tableItems: ReactNode[];
    title: string;
    headers: string[];
}

export const TableContainer = ({ tableItems, title, headers }: TableContainerProps) => {
    const { classes } = useStyles();

    return (
        <Stack className={classes.tableContainer}>
            <Text className={classes.tableTitle}>{title}</Text>
            <Grid columns={5} className={classes.tableHeader}>
                <Col span={2}>{headers[0]}</Col>
                <Col span={1}>{headers[1]}</Col>
                <Col span={1}>{headers[2]}</Col>
                <Col span={1}>{headers[3]}</Col>
            </Grid>
            {/* <GradientBorderBox extraClassesOuter="no-top-radius" extraClassesInner="no-top-radius"> */}
            <Stack className={classes.tableRowsContainer}></Stack>
            {tableItems}
            {/* </GradientBorderBox> */}
        </Stack>
    );
};
