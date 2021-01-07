import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Payment } from './Payment';

describe("Payment", () => {
    it("renders correctly", () => {
        const { getByText, getByPlaceholderText } = render(<Payment />);

        expect(getByText(/Адрес доставки/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/0000 0000 0000 0000/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/MM\/YYYY/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/CVV/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/имя как на карте/i)).toBeInTheDocument();
        expect(getByText(/заказать/i)).toBeInTheDocument();
    });

    describe("validate payment system", () => {
        it("validates payment system VISA", () => {
            const { getByText, getByPlaceholderText } = render(<Payment />);

            fireEvent.input(getByPlaceholderText(/0000 0000 0000 0000/i), { target: { value: "4" } });

            expect(getByText("VISA")).toBeInTheDocument();
        });

        it("validates payment system MasterCard", () => {
            const { getByText, getByPlaceholderText } = render(<Payment />);

            fireEvent.input(getByPlaceholderText(/0000 0000 0000 0000/i), { target: { value: "5" } });

            expect(getByText("MasterCard")).toBeInTheDocument();
        });
    });

    describe("validate text", () => {
        it("only number", async () => {
            const { getByText, getByPlaceholderText } = render(<Payment />);

            fireEvent.input(getByPlaceholderText(/0000 0000 0000 0000/i), { target: { value: "hhhh" } });

            await act(async () => {
                fireEvent.click(getByText(/заказать/i));
            });

            expect(getByText(/Только цифры!/i)).toBeInTheDocument();
        });
    });

    describe("on card number change", () => {
        it("breaks the card number into groups of four digits", async () => {
          const { getByPlaceholderText } = render(
            <Payment />
          );
    
          const ccInput = getByPlaceholderText(/0000 0000 0000 0000/i);
          fireEvent.input(ccInput, { target: { value: "1234123412341234" } });
    
          expect(ccInput.value).toEqual("1234 1234 1234 1234");
        });
    
        it("limits the card number by 19 digits", async () => {
          const { getByPlaceholderText } = render(
            <Payment />
          );
    
          const ccInput = getByPlaceholderText(/0000 0000 0000 0000/i);
          fireEvent.input(ccInput, { target: { value: "12341234123412341234" } });
    
          expect(ccInput.value).toEqual("1234 1234 1234 1234");
        });
      });
});