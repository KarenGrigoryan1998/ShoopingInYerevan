export const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  loginStatus: "",
  logoutStatus: "",
  registerStatus: ""
};
