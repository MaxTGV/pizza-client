import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import {Registration} from './Registration';

describe("Registration", () => {
    it("renders correctly", () => {
      const history = createMemoryHistory();
      const { getByText, getByPlaceholderText } = render(
        <Router history={history}>
          <Registration />
        </Router>
      );
      expect(getByText(/регистрация/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/введите логин/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/введите пароль/i)).toBeInTheDocument();
      expect(getByText(/зарегистрироваться/i)).toBeInTheDocument();
    });
  
  
    it("link to registration", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Registration />
        </Router>
      );
      expect(container.innerHTML).toMatch(/Страница регистрации/i)
  
      fireEvent.click(getByText(/login/i));
  
      expect(history.location.pathname).toEqual("/login");
    });

    describe("onSubmit", () => {
      it("collects login and password", async () => {
        const history = createMemoryHistory();
        const onSubmit = jest.fn();
        const {getByText, getByPlaceholderText} = render(
          <Router history={history}>
            <Registration onSubmit={onSubmit}/>
          </Router>
        );
  
        fireEvent.input(getByPlaceholderText(/введите логин/i), {target: {value: "Max"}})
        fireEvent.input(getByPlaceholderText(/введите пароль/i), {target: {value: "fff"}})

        await act(async () => {
          fireEvent.click(getByText(/зарегистрироваться/i));
        });
  
        expect(history.location.pathname).toEqual("/");
      });
    });
  });