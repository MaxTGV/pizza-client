import { forwardRef, Fragment } from "react";
import styled from "styled-components";

const Switcher = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  width: max-content;
  height: 32px;
  background: #f9f9fb;
  border-radius: 12px;
  color: #4b4b7c;

  label {
    padding: 4px 12px;
    width: auto;
  }

  input {
    display: none;
  }

  input:checked + label {
    line-height: 20px;
    background: white;
    border-radius: 10px;
    color: #1f1f33;
    font-weight: 500;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
      0px 0px 2px rgba(75, 75, 124, 0.2);
  }
`;

export const RadioGroup = forwardRef(({ items, name, ...props }, ref) => {
  return (
    <Switcher>
      {items.map((item) =>
        Object.entries(item).map(([key, value]) => (
          <Fragment key={key}>
            <input
              type="radio"
              ref={ref}
              name={name}
              id={key}
              value={key}
              {...props}
            />
            <label htmlFor={key}>{value.name}</label>
          </Fragment>
        ))
      )}
    </Switcher>
  );
});
