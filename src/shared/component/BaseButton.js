import React, { forwardRef } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0, 1),
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
  },
}));

export const BaseButton = forwardRef(({ children, ...props }, ref) => {
  const styles = useStyles();

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

export const RegistrationButton = styled(BaseButton)`
  margin-top: ${(props) => props.mt};
  margin-bottom: 16px;
  background-color: rgba(0, 168, 150, 1);
  border-radius: 16px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: "M PLUS Rounded  1C ExtraBold";
  text-transform: none;
  &:hover {
    background-color: rgba(0, 168, 150, 1);
    color: white;
    box-shadow: 0 0 0 0.2rem;
  }
`;
