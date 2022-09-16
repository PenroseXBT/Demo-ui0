import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    headerContainer: {
        width: '100%',
        display: `inline-flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        padding: `16px 120px`,
        backgroundColor: '#151726',

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: `0px`,
        },
    },
    logoContainer: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-start`,
    },
    logoText: {
        marginLeft: 20,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '150%',
        background: '-webkit-linear-gradient(0deg, #9945FF 0%, #14F195 100%);',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        'text-fill-color': 'transparent',
    },
    dashboardText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '150%',
        color: '#14F195',
        marginLeft: '70px',
    },
    menuItemContainer: {
        width: '100%',
        display: `inline-flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
    },
    menuItemWrapper: {
        marginLeft: 32,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginLeft: 0,
        },
    },
    runeText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '15px',
        marginRight: '20px',
    },
    solanaButton: {
        backgroundColor: '#151726',
        borderRadius: '15px',
    },
    solanaButtonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '150%',
        background: '-webkit-linear-gradient(0deg, #9945FF 0%, #14F195 100%);',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        'text-fill-color': 'transparent',

        padding: '8px 16px',
    },
}));
