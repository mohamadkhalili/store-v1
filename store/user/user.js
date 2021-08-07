//mutation variables
import {SET_PASSWORD, SET_PHONE} from "../types/mutation-types";

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
  async checkPhone({commit, state}) {
    const phone_found = await this.$axios.$post('/api/users/login/', {
      'phone': '09127761266',
      'csrfmiddlewaretoken': this.state.csrfmiddlewaretoken
    })
    console.log('hhhhhhhhhhhhhhhhh: ', phone_found)
  }
}
