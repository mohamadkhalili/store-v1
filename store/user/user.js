//mutation variables
import {SET_PHONE, SET_SESSIONID, SET_STATUS_REGISTER, SET_USER_LOGIN} from "../types/mutation-types";
//action variables
import {CHECK_PHONE, GET_CSF, SIGNIN} from "../types/action-types";


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
    state.address = user.address
    state.date_joined = user.date_joined
    state.email = user.email
    state.first_name = user.first_name
    state.last_name = user.last_name
    state.id = user.id
    state.is_active = user.is_active
    state.is_staff = user.is_staff
    state.is_superuser = user.is_superuser
    state.last_login = user.last_login
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
    const respons = await this.$axios.$post('/api/users/login/', {
      'phone': state.phone,
      'password': password,
      'csrfmiddlewaretoken': rootState.user.auth.csrfmiddlewaretoken
    })
    commit(SET_USER_LOGIN, respons.user)
    commit('user/auth/' + SET_SESSIONID, respons.sessionid)
    console.log(respons)
  }
}
