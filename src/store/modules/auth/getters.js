export const getters = {
  authLoginStatus: state => state.loginStatus,
  authLogoutStatus: state => state.logoutStatus,
  authRegisterStatus: state => state.registerStatus,
  isAuthenticated: state => !!state.token
};
