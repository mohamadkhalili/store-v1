//mutation variables
import {SET_PASSWORD, SET_PHONE} from "../types/mutation-types";
import {GET_CSF} from "../types/action-types";

//action variables

//state
export const state = () => ({
  loading: false,
  phone: null,
  register: null, //if phone registered equal true
  password: null
})

//mutations
export const mutations = {
  [SET_PHONE](state, text) {
    state.phone = text
  },
  [SET_PASSWORD](state, text) {
    state.password = text
  },
}

//actions
export const actions = {
  async checkPhone({dispatch, commit, state, rootState}, csrfmiddlewaretoken) {
    await dispatch('user/auth/' + GET_CSF, '', {root: true})
    // console.log()
    const phone_found = await this.$axios.$post('/api/users/login/', {
      'phone': '09127761266',
      'csrfmiddlewaretoken': rootState.user.auth.csrfmiddlewaretoken
    })
    console.log('hhhhhhhhhhhhhhhhh: ', phone_found)
  }
}
