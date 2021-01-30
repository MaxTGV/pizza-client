import { forwardRef } from "react";
import styled from "styled-components";
import { Input } from "../../shared/component/Input";

const StyledAddressDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 336px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 8px;
`;

const StyledAddressOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 104px;
  height: auto;
  margin: 0px 8px 0px 0px;
  p: first-child {
    line-height: 20px;
    color: #4b4b7c;
    margin: 8px 0px 4px 0px;
  }
`;

export const AddressDetails = forwardRef(
  ({ option, names, error, helperText }, ref) => {
    return (
      <StyledAddressDetails>
        {names &&
          names.map((name, i) => (
            <StyledAddressOptions key={i}>
              <p>{option[i]}</p>
              <Input
                ref={ref}
                name={name}
                type="text"
                error={error[i]}
                helperText={helperText[i]}
              />
            </StyledAddressOptions>
          ))}
      </StyledAddressDetails>
    );
  }
);