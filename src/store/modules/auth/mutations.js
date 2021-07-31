export const mutations = {
  AUTH_LOGIN_REQUEST: state => (state.loginStatus = "loading"),
  AUTH_LOGIN_SUCCESS: (state, token, user) => {
    state.token = token;
    state.loginStatus = "success";
    state.user = user;
  },
  AUTH_LOGIN_ERROR: state => (state.status = "error"),
  AUTH_LOGOUT_REQUEST: state => {
    state.logoutStatus = "loading";
  },
  AUTH_LOGOUT_SUCCESS: state => {
    state.token = "";
    state.logoutStatus = "success";
    state.user = {};
  },
  AUTH_LOGOUT_ERROR: state => {
    state.logoutStatus = "error";
  },
  AUTH_REGISTER_REQUEST: state => {
    state.registerStatus = "loading";
  },
  AUTH_REGISTER_SUCCESS: (state, token, user) => {
    state.token = token;
    state.registerStatus = "success";
    state.user = user;
  },
  AUTH_REGISTER_ERROR: state => {
    state.registerStatus = "error";
  }
};
