import axios from "axios";

export const actions = {
  userLogin: ({ commit }, payload) => {
    // commit("AUTH_LOGIN_REQUEST");
    // if (payload) {
    //   if (localStorage.getItem("token") !== null) {
    //     localStorage.removeItem("token");
    //   }
    //   let token = "fakeToken";
    //   localStorage.setItem("token", token);
    //   commit("AUTH_LOGIN_SUCCESS", token);
    // } else {
    //   commit("AUTH_LOGIN_ERROR");
    // }
    // this Promise must USE when sending AXIOS request to API
    return new Promise((resolve, reject) => {
      commit("AUTH_LOGIN_REQUEST");
      const url = "";
      axios
        .get(url, { data: payload })
        .then(res => {
          if (res && res.status === 200) {
            if (localStorage.getItem("token") !== null) {
              localStorage.removeItem("token");
            }
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("AUTH_LOGIN_SUCCESS", token, user);
            resolve(res);
          }
        })
        .catch(err => {
          commit("AUTH_LOGIN_ERROR");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  userLogout: ({ commit }, payload) => {
    commit("AUTH_LOGOUT_REQUEST");
    if (payload) {
      localStorage.removeItem("token");
      commit("AUTH_LOGOUT_SUCCESS");
    } else {
      commit("AUTH_LOGOUT_ERROR");
    }
    // this Promise must USE when sending AXIOS request to API

    // return new Promise((resolve, reject) => {
    //   commit("AUTH_LOGOUT_REQUEST");
    //   const url = "";
    //   axios
    //     .post(url, { data: payload })
    //     .then(res => {
    //       if (res && res.status === 200) {
    //         localStorage.removeItem("token");
    //         delete axios.defaults.headers.common['Authorization']
    //         commit("AUTH_LOGOUT_SUCCESS");
    //         resolve(res);
    //       }
    //     })
    //     .catch(err => {
    //       commit("AUTH_LOGOUT_ERROR");
    //       localStorage.removeItem('token')
    //       reject(err);
    //     });
    // });
  },
  userRegister: ({ commit }, payload) => {
    // commit("AUTH_REGISTER_REQUEST");
    // if (payload) {
    //   if (localStorage.getItem("token") !== null) {
    //     localStorage.removeItem("token");
    //   }
    //   let token = "fakeToken";
    //   localStorage.setItem("token", token);
    //   commit("AUTH_REGISTER_SUCCESS", token);
    // } else {
    //   commit("AUTH_REGISTER_ERROR");
    // }

    // this Promise must USE when sending AXIOS request to API
    return new Promise((resolve, reject) => {
      commit("AUTH_REGISTER_REQUEST");
      axios
        .post("/User/Register", { data: payload })
        .then(res => {
          if (res && (res.codeStatus === 200 || res.codeStatus === 202)) {
            if (localStorage.getItem("token") !== null) {
              localStorage.removeItem("token");
            }
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("AUTH_REGISTER_SUCCESS", token, user);
            resolve(res);
          }
        })
        .catch(err => {
          commit("AUTH_REGISTER_ERROR");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  }
};
