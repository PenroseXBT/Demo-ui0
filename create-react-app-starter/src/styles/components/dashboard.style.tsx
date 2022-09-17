import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    overviewContainer: {
        padding: '20px',
        width: '100%',
        height: '280px',
        background: '#1C2442',
        borderRadius: '15px',
    },
    overviewInner: {
        background: 'linear-gradient(90deg, rgba(153, 69, 255, 0.1), rgba(20, 241, 49, 0.1) 100%)',
        width: '100%',
        height: '240px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        columnGap: '0px',
    },
    overviewSection: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        rowGap: '8px',

        '&.right': {
            marginLeft: '80px',
        },
        '&.outer': {
            marginLeft: '60px',
        },
    },
    overviewSectionTitle: {
        padding: '0px',
        margin: '0px',
        color: 'rgba(255, 255, 255, 0.5)',
        lineHeight: '16px',
    },
    overviewSectionContent: {
        padding: '0px',
        margin: '0px',
        lineHeight: '16px',
        color: 'white',
    },
    overviewHalf: {
        rowGap: '30px',
        flex: 1,
        '&.right': {
            marginRight: '20px',
        },
        '&.outer': {
            flex: 0,
            marginRight: '40px',
        },
    },
}));
