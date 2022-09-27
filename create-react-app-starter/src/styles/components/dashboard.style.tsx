import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    overviewContainer: {
        padding: '20px',
        width: '100%',
        height: '280px',
        background: '#1C2442',
        borderRadius: '15px',
        position: 'relative',
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
        fontFamily: 'Inter',
    },
    overviewSectionContent: {
        padding: '0px',
        margin: '0px',
        lineHeight: '16px',
        color: 'white',
        fontFamily: 'Inter',
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
    sectionHeader: {
        color: 'white',
        fontWeight: 700,
        fontSize: '24px',
        fontFamily: 'Inter',
        marginTop: '40px',
    },
    marketsContainer: {
        flex: 1,
        background: '#1C2442',
        borderRadius: '15px',
    },
    marketContainer: {
        padding: '20px',
        height: '220px',
        background: '#1C2442',
        borderRadius: '15px',
    },
    marketTitle: {
        color: 'white',
        fontWeight: 700,
        fontSize: '24px',
        fontFamily: 'Inter',
    },
    marketInner: {
        height: '100%',
        width: '100%',
    },

    marketHalf: {
        height: '100%',
        rowGap: '30px',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        flex: 1,
        '&.right': {
            marginLeft: '20px',
        },
        '&.outer': {
            flex: 0,
            marginRight: '40px',
        },
    },
    tableTitle: {
        color: 'white',
        fontWeight: 700,
        fontSize: '24px',
        fontFamily: 'Inter',
        background: 'linear-gradient(90deg, #9945FF 0%, #14F195 100%)',
        paddingRight: '20px',
        paddingLeft: '20px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
        width: 'fit-content',
        marginLeft: '-1px',
    },
    tableContainer: {
        marginTop: '40px',
        rowGap: '0px',
        columnGap: '0px',
        flex: 1,
    },

    tableHeader: {
        color: 'white',
        fontWeight: 600,
        fontSize: '16px',
        fontFamily: 'Inter',
        background: 'linear-gradient(90deg, #9945FF 0%, #14F195 100%)',
        paddingRight: '10px',
        paddingLeft: '10px',
        margin: '0px',
        marginLeft: '-1px',
        marginRight: '-1px',
        borderTopRightRadius: '15px',
    },
    tableRowCol: {
        color: 'white',
    },
    tableRowContainer: {
        margin: '0px',
        paddingRight: '10px',
        paddingLeft: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '1px',
    },
    tableRowsContainer: {
        margin: '0px',
    },
}));
