//mutation types
import {SET_CSFMIDDLEWARETOKEN, SET_CSRFTOKEN, SET_SESSIONID} from "../types/mutation-types";
import {GET_CSF} from "../types/action-types";


//state
export const state = () => ({
  csrftoken: null,
  csrfmiddlewaretoken: null,
})

//mutations
export const mutations = {
  [SET_CSRFTOKEN](state, payload) {
    state.csrftoken = payload
    document.cookie = "csrftoken=" + payload + ";path=/"
  },
  [SET_CSFMIDDLEWARETOKEN](state, payload) {
    state.csrfmiddlewaretoken = payload
  },
  [SET_SESSIONID](state, payload) {
    document.cookie = "sessionid=" + payload + ";path=/"
  },
}

//actions
export const actions = {
  async [GET_CSF]({commit}) {
    const response = await this.$axios.$get("/api/users/login/")
    commit(SET_CSRFTOKEN, response.csrftoken)
    commit(SET_CSFMIDDLEWARETOKEN, response.csrfmiddlewaretoken)
  }
}

//'supporter_datas/user
