import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": {
      backgroundColor: 'white',
      padding: 12,
    },
    "& label.Mui-focused": {
      color: 'rgba(0, 168, 150, 1)',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 168, 150, 1)',
      },
    }
  },
});

export const Input = forwardRef((props, ref) => {
  const styles = useStyles();

  return (
    <TextField
      className={styles.root}
      variant="outlined"
      margin="normal"
      fullWidth
      size="small"
      inputRef={ref}
      {...props}
    />
  );
});
