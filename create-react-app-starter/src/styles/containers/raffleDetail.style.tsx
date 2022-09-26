import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  simpleGrid: {
    paddingTop: 24,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 0,
    },
  },
  contentContainer: {
    width: "80%",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-center",
    padding: `${theme.spacing.md}px`,
    paddingBottom: 0,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100%",
      padding: 0,
    },
  },
  imageDesktop: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  imageMobile: {
    minHeight: `326px !important`,

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
  hideMobile: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  hideDesktop: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
  textContainer: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 85,
  },
  cardHeader: {
    display: "inline-flex",
    alignItems: "flex-end",
    paddingBottom: `${theme.spacing.md}px`,
  },
  statsContainer: {
    width: "auto",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTop: "1px solid #E9ECEF",
    borderBottom: "1px solid #E9ECEF",
    padding: `${theme.spacing.xl}px 0px`,
  },
  textContent: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "auto",
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
  actionContainer: {
    paddingTop: `${theme.spacing.lg}px`,
    paddingBottom: `${theme.spacing.lg}px`,
    display: "inline-flex",
    flexDirection: "column",
  },
  orderDetails: {
    display: "inline-flex",
    justifyContent: "space-between",
  },
  messageContainer: {
    borderTop: "1px solid #E9ECEF",
    paddingTop: `${theme.spacing.lg}px`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
}));
