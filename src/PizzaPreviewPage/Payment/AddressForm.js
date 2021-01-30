import React, { forwardRef } from "react";
import styled from "styled-components";
import { Input } from "../../shared/component/Input";
import { AddressDetails } from "./AddressDetails";

const StyledAddressForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 16px 0px 16px;
  width: 328px;
  height: auto;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 16px 0px;
  }
`;

export const AddressForm = forwardRef(({ errors }, ref) => {
  return (
    <>
      <StyledAddressForm>
        <h3>Адрес доставки</h3>
        <Input
          ref={ref}
          name="address"
          type="text"
          placeholder="Введите адрес"
          error={!!errors.address}
          helperText={errors?.address?.message}
        />
        <AddressDetails
          option={["подъезд", "этаж", "квартира"]}
          ref={ref}
          names={["entrance", "floor", "apartment"]}
          error={[!!errors.entrance, !!errors.floor, !!errors.apartment]}
          helperText={[
            errors?.entrance?.message,
            errors?.floor?.message,
            errors?.apartment?.message,
          ]}
        />
      </StyledAddressForm>
    </>
  );
});
