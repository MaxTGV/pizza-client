import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    width: 328,
    height: "auto",
    borderRadius: 16,
    paddingTop: 12,
    boxShadow: "0px 8px 16px rgba(75, 75, 124, 0.05)",
  },
});

export const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container className={styles.root} {...props}>
      {children}
    </Container>
  );
};
