import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  mainContainer: {
    width: "100%",
    display: `inline-flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    padding: `0px 12px`,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: `0px`,
    },
  },
}));
