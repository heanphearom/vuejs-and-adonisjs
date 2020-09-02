import router from '../router'
import HTTP from '../http'

export default {
    namespaced: true,
    state: {
        registerEmail: 'hello',
        registerPassword: 'world',
        registerError: null,
        loginEmail: 'hello',
        loginPassword: 'world',
        loginError: null,
        token: null
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },

        // set register
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },

        // set login
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        }
    },
    actions: {
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },

        register({ commit, state }) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword
            })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/')
                })
                .catch(() => {
                    commit('setRegisterError', 'An error has occured trying to create your account.')
            })
        },

        login({ commit, state }) {
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword
            })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/')
                })
                .catch(() => {
                    commit('setLoginError', 'An error has occured trying to login.')
                })
        }
    }
}