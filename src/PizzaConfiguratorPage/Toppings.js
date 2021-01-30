import React, { forwardRef } from "react";
import styled from "styled-components";
import { FormControlLabel, Checkbox, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const Basic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: ${(props) => props.w}px;
  height: auto;
  background: white;
`;

const ListToppings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 8px 4px 0px;
  padding: 8px 0px;
  width: 104px;
  height: 114px;
  background: white;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }

  p {
    margin: 5px 0px 0px 0px;
    padding-bottom: 4px;
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #1f1f33;
    width: 80px;
    height: 20px;
  }
`;

const InfoTopping = styled.div`
  width: 80px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 65px;
    width: 65px;
  }
`;

const FormTopping = styled.div`
  font-family: "Rounded Mplus 1c";
  display: flex;
  align-items: center;
  position: relative;
  top: -105px;
  left: 0px;
  border-radius: 12px;

  label {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    padding: 0px 0px 5px 0px;
    width: 100px;
    height: 125px;
    margin: 0px;
    position: relative;
    top: 0px;
    left: 0px;
    align-items: flex-end;
  }

  span {
    font-family: "Rounded Mplus 1c";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

const useStyles = makeStyles({
  root: {
    padding: "0px 4px 0px 0px",
  },
  icon: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    border: "1px solid #C0C0D8",
    width: 16,
    height: 16,
  },
  checkedIcon: {
    backgroundColor: "rgba(0, 168, 150, 1)",
    border: "1px solid rgba(0, 168, 150, 1)",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
});

export const Toppings = forwardRef(({ topping, width, ...props }, ref) => {
  const styles = useStyles();

  return (
    <Basic w={width}>
      {topping.map((item, i) => (
        <ListToppings key={i} className={styles.borderStyle}>
          <InfoTopping>
            <img
              src={`https://artem-pizza-server.herokuapp.com/${item.thumbnail}`}
              alt={item.name}
            />
            <p>{item.name}</p>
          </InfoTopping>
          <FormTopping>
            <FormControlLabel
              label={`${item.price} ₽`}
              control={
                <Checkbox
                  className={styles.root}
                  icon={<span className={styles.icon} />}
                  checkedIcon={
                    <span className={clsx(styles.icon, styles.checkedIcon)} />
                  }
                  inputRef={ref}
                  value={item.slug}
                  name={item.category}
                  {...props}
                />
              }
            />
          </FormTopping>
        </ListToppings>
      ))}
    </Basic>
  );
});
