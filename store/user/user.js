//mutation variables
import {SET_PHONE, SET_SESSIONID, SET_STATUS_REGISTER, SET_USER_LOGIN} from "../types/mutation-types";
//action variables
import {CHECK_PHONE, GET_CSF, GET_USER, SIGNIN, SIGNOUT} from "../types/action-types";


//state
export const state = () => ({
  status_register: false, //if phone registered equal true //status register
  status_signin: false,
  status_signup: false,
  address: [],
  date_joined: '',
  email: '',
  first_name: '',
  last_name: '',
  id: null,
  is_active: false,
  is_staff: false,
  is_superuser: false,
  last_login: '',
  phone: '',
})

//mutations
export const mutations = {
  [SET_PHONE](state, text) {
    state.phone = text
  },
  [SET_STATUS_REGISTER](state, status) {
    state.status_register = status
  },
  [SET_USER_LOGIN](state, user) {
    state.id = user ? user.id : null
    state.address = user ? user.address : ''
    state.date_joined = user ? user.date_joined : null
    state.email = user ? user.email : ''
    state.first_name = user ? user.first_name : ''
    state.last_name = user ? user.last_name : ''
    state.is_active = user ? user.is_active : false
    state.is_staff = user ? user.is_staff : false
    state.is_superuser = user ? user.is_superuser : false
    state.last_login = user ? user.last_login : null
  }
}

//actions
export const actions = {
  async [CHECK_PHONE]({dispatch, commit, rootState, state}, phone) {
    commit(SET_PHONE, phone)
    await dispatch('user/auth/' + GET_CSF, '', {root: true})
    const respons = await this.$axios.$post('/api/users/login/', {
      'phone': phone,
      'csrfmiddlewaretoken': rootState.user.auth.csrfmiddlewaretoken
    })
    commit(SET_STATUS_REGISTER, respons.phone_found)
  },
  async [SIGNIN]({dispatch, commit, rootState, state}, password) {
    await dispatch('user/auth/' + GET_CSF, '', {root: true})
    const response = await this.$axios.$post('/api/users/login/', {
      'phone': state.phone,
      'password': password,
      'csrfmiddlewaretoken': rootState.user.auth.csrfmiddlewaretoken
    })
    commit(SET_USER_LOGIN, response.user)
    console.log(response)
    commit('user/auth/' + SET_SESSIONID, response.sessionid, {root: true})
    console.log(response)
  },
  async [SIGNOUT]() {
    await this.$axios.get('/api/users/logout/')
  },
  async [GET_USER]({commit}) {
    const response = await this.$axios.get('/api/supporter_datas/user/')
    commit(SET_USER_LOGIN, response.data.user)
  }
}
