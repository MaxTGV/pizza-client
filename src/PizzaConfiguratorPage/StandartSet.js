import { forwardRef, Fragment } from "react";
import styled from "styled-components";

const Basic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: ${(props) => props.w}px;
  height: auto;
  margin-right: 18px;
  p {
    margin: 0;
    padding-bottom: 4px;
    font-family: M PLUS Rounded 1c ExtraBold;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b7c;
  }
`;

const Radio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: ${(props) => props.w}px;
  height: 28px;
  background: #f9f9fb;
  border-radius: 12px;

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4B4B7C;
    border-radius: 10px;
    width: ${(props) => props.lw}px;
  }

  input {
    display: none;
  }

  input:checked + label {
    background: white;
    color: #1f1f33;
    font-weight: 500;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
      0px 0px 2px rgba(75, 75, 124, 0.2);
  }
`;

export const StandartSet = forwardRef(
  ({ items, title, name, width, labelwidth, ...props }, ref) => {
    return (
      <Basic w={width}>
        <p>{title}</p>
        <Radio w={width} lw={labelwidth}>
          {items.map((item) =>
            Object.entries(item).map(([key, value]) => (
              <Fragment key={key}>
                <input ref={ref} name={name} id={key} value={key} {...props} />
                <label htmlFor={key}>{value.name}</label>
              </Fragment>
            ))
          )}
        </Radio>
      </Basic>
    );
  }
);