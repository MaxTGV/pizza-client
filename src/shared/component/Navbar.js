import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 56,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    display: "flex",
    alignItems: "center",
    justifyContent: (props) => props.jc ? props.jc : "flex-start",
    backgroundColor: (props) => props.bg ? props.bg : 'rgba(249, 249, 251, 1)',
  },
}));

export const Navbar = ({ children, ...props }) => {
  const styles = useStyles({ ...props });

  return <Container className={styles.root}>{children}</Container>;
};