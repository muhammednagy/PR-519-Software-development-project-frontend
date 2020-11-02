import axios from 'axios'

export default {
    namespaced: true,
    state: {
        auth_token: {},
        nickname: {}
    },
    getters: {
        auth_token: state => state.auth_token,
        nickname: state => state.nickname,
    },
    mutations: {
        auth_token(state, payload) {
            state.auth_token = payload;
        },
        nickname(state, payload) {
            state.nickname = payload;
        },
    },
    actions: {
        login({ commit }, filter) {
            axios({
                method: "post",
                url: "http://localhost:4000/api/v1/login",
                data: {
                    email: filter.email,
                    password: filter.password,
                },
                headers: { Accept: "application/json" },
                timeout: 30000
            })
                .then(response => {
                    commit("auth_token", {
                        data: response.data,
                        is_error: false
                    });
                })
                .catch(e => {
                commit("auth_token", { is_error: true });
                // eslint-disable-next-line
                console.log("auth_token:", e);
                });
        },
        signup({ commit }, filter) {
            axios({
                method: "post",
                url: "http://localhost:4000/api/v1/users",
                data: {
                    email: filter.email,
                    nickname: filter.name,
                    password: filter.password,
                },
                headers: { Accept: "application/json" },
                timeout: 30000
            })
                .then(response => {
                    commit("auth_token", {
                        data: response.data,
                        is_error: false
                    });
                })
                .catch(e => {
                    commit("auth_token", { is_error: true });
                    // eslint-disable-next-line
                    console.log("auth_token:", e);
                });
        },
    }
};
