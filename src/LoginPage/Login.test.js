import { Router } from "react-router-dom";
import { Login } from "./Login";
import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";

describe("Login", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );
    expect(getByText(/авторизация/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/введите логин/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/введите пароль/i)).toBeInTheDocument();
    expect(getByText(/авторизоваться/i)).toBeInTheDocument();
  });

  it("link to registration", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );
    expect(container.innerHTML).toMatch(/Страница авторизации/i);

    fireEvent.click(getByText(/регистрация/i));

    expect(history.location.pathname).toEqual("/registration");
  });

  describe("onSubmit", () => {
    it("collects login and password", async () => {
      const history = createMemoryHistory();
      const onSubmit = jest.fn().mockImplementation((data) => data);
      const { getByText, getByPlaceholderText } = render(
        <Router history={history}>
          <Login onSubmit={onSubmit} />
        </Router>
      );

      fireEvent.input(getByPlaceholderText(/введите логин/i), {
        target: { value: "Max" },
      });
      fireEvent.input(getByPlaceholderText(/введите пароль/i), {
        target: { value: "fff" },
      });

      await act(async () => {
        fireEvent.click(getByText(/авторизоваться/i));
      });

      expect(history.location.pathname).toEqual("/");
    });
  });
});
