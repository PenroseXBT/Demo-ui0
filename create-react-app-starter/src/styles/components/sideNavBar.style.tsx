import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  optionContainer: {
    width: "100%",
    height: "100%",
    display: `inline-flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  logoContainer: {
    display: `inline-flex`,
    alignItems: `center`,
    justifyContent: `flex-start`,
  },
  logoText: {
    marginLeft: 20,
    display: `inline-flex`,
  },
  menuItemContainer: {
    width: "100%",
    display: `inline-flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    justifyContent: `flex-start`,
  },
  menuItemWrapper: {
    padding: 10,
    width: "100%",
    cursor: "pointer",
    borderRadius: theme.radius.sm,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
  active: {
    backgroundColor: theme.colors.gray[0],
  },
  unStyledButtonWrapper: {
    display: "inline-flex",
    alignItems: "center",
  },
  iconWrapper: {
    display: "inline-flex",
    marginRight: 20,
  },
}));
