import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  grid: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // display: "none",
    },
  },
}));
