//mutation variables
import {
  SET_AFTER_EDIT_INFORMATION,
  SET_LOADING_USER,
  SET_PHONE,
  SET_SESSIONID,
  SET_STATUS_REGISTER,
  SET_USER_LOGIN
} from "../types/mutation-types";
//action variables
import {CHECK_PHONE, EDIT_USER_INFORMATION, GET_CSF, GET_USER, SIGNIN, SIGNOUT} from "../types/action-types";


//state
export const state = () => ({
  loading: false,
  status_register: false, //if phone registered equal true //status register
  status_signin: false,
  status_signup: false,
  address: '',
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
  postal_code: '',
  job: '',
  national_code: '',
  error: {
    phone: null,
    email: null,
    national_code: null,
    postal_code: null,
    job: null,
    address: null,
    first_name: null,
    last_name: null
  },
})

//mutations
export const mutations = {
  [SET_PHONE](state, phone) {
    state.phone = phone
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
    state.job = user ? user.job : false
    state.last_login = user ? user.last_login : null
    state.national_code = user ? user.national_code : null
    state.postal_code = user ? user.postal_code : null
    state.phone = user ? (user.phone) : null
  },
  [SET_LOADING_USER](state, loading) {
    state.loading = loading
  },
  [SET_AFTER_EDIT_INFORMATION](state, response) {
    if (response.phone) {
      state.phone = response ? response.phone : null
      state.error.phone = null
    } else if (response.first_name && response.last_name) {
      state.first_name = response ? response.first_name : ''
      state.last_name = response ? response.last_name : ''
      state.error.first_name = null
      state.error.last_name = null
    } else if (response.email) {
      state.email = response ? response.email : null
      state.error.email = null
    } else if (response.national_code) {
      state.national_code = response ? response.national_code : null
      state.error.national_code = null
    } else if (response.postal_code) {
      state.postal_code = response ? response.postal_code : null
      state.error.postal_code = null
    } else if (response.job) {
      state.job = response ? response.job : null
      state.error.job = null
    } else if (response.address) {
      state.address = response ? response.address : null
      state.error.address = null
    } else if (response.error) {
      if (response.error.phone) {
        state.error.phone = response.error.phone
      } else if (response.error.first_name) {
        state.error.first_name = response.error.first_name
      } else if (response.error.last_name) {
        state.error.last_name = response.error.last_name
      } else if (response.error.email) {
        state.error.email = response.error.email
      } else if (response.error.national_code) {
        state.error.national_code = response.error.national_code
      } else if (response.error.postal_code) {
        state.error.postal_code = response.error.postal_code
      } else if (response.error.job) {
        state.error.job = response.error.job
      } else if (response.error.address) {
        state.error.address = response.error.address
      }
    }
  }
}

//actions
export const actions = {
  async [CHECK_PHONE]({dispatch, commit, rootState, state}, phone) {

    await dispatch('user/auth/' + GET_CSF, '', {root: true})
    const respons = await this.$axios.$post('/api/users/login/', {
      'phone': phone,
      'csrfmiddlewaretoken': rootState.user.auth.csrfmiddlewaretoken
    })
    commit(SET_PHONE, phone)
    console.log('gg',phone)
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
  },
  async [EDIT_USER_INFORMATION]({commit, dispatch}, object) {
    commit(SET_LOADING_USER, true)
    try {
      const request = await this.$axios.put('/api/users/userchange/', object)
      console.log('userchange: ', request)
      commit(SET_AFTER_EDIT_INFORMATION, request.data)
      commit(SET_LOADING_USER, false)
    } catch (e) {
      commit(SET_LOADING_USER, false)
    }
  }
}
