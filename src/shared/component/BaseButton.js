import React, { forwardRef } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: (props) => ({
    marginTop: theme.spacing(+props.mt),
    marginBottom: theme.spacing(+props.mb),
    backgroundColor: "rgba(0, 168, 150, 1)",
    borderRadius: 16,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "M PLUS Rounded  1C ExtraBold",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 168, 150, 1)",
      color: "white",
      boxShadow: "0 0 0 0.2rem",
    },
    "&:disabled": {
      backgroundColor: "rgba(249, 249, 251, 1)",
      color: '#8181B1',
      opacity: 0.5
    },
  }),
}));

export const BaseButton = forwardRef(({ children, ...props }, ref) => {
  const styles = useStyles({...props});

  return (
    <Button
      className={styles.root}
      type="submit"
      fullWidth
      variant="contained"
      innerRef={ref}
      {...props}
    >
      {children}
    </Button>
  );
});