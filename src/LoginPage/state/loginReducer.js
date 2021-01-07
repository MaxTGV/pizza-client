export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "login/set_login": {
      return action.payload;
    }
    default:
      return state;
  }
};
