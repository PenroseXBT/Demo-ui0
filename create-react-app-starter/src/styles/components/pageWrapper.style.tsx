import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    grid: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            // display: "none",
        },
    },
    root: {
        width: '1200px',
        padding: '0px',
        maxWidth: '5000px',
    },
}));
