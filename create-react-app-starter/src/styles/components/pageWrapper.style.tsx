import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    grid: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            // display: "none",
        },
    },
    root: {
        width: '100%',
        padding: '0px 300px',
        maxWidth: '5000px',

        backgroundSize: 'cover',
        backgroundImage: 'url("https://file.rendit.io/n/KBa6J8X5hCXg0g5fIUjJ.svg")',
    },
}));
