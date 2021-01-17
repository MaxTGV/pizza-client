import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: (props) => ({
    width: "100%",
    paddingBottom: theme.spacing(+props.pb)
  }),
}));

export const Form = ({ children, ...props }) => {
  const styles = useStyles({...props});

  return (
    <form className={styles.root} {...props}>
      {children}
    </form>
  );
};
