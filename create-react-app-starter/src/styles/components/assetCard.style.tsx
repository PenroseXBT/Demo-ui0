import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  cardContentContainer: {
    width: "100%",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-center",
    padding: `${theme.spacing.md}px`,
    paddingBottom: 0,
  },
  cardActionContainer: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "flex-center",
    padding: `${theme.spacing.md}px`,
  },
  textContainer: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    minWidth: 85,
  },
  cardHeader: {
    display: "inline-flex",
    alignItems: "flex-end",
    paddingBottom: `${theme.spacing.sm}px`,
  },
  statsContainer: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTop: "1px solid #E9ECEF",
    borderBottom: "1px solid #E9ECEF",
    padding: `${theme.spacing.sm}px 0px`,
  },
  textContent: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 62,
  },
  textWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: `${theme.spacing.sm}px`,
    marginBottom: 4,
    overflow: "hidden",
  },
}));
