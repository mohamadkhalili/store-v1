//mutation types
import {SET_CSFMIDDLEWARETOKEN, SET_CSRFTOKEN, SET_SESSIONID} from "../types/mutation-types";
import {GET_CSF} from "../types/action-types";


//state
export const state = () => ({
  csrftoken: null,
  csrfmiddlewaretoken: null,
  sessionid: null,
})

//mutations
export const mutations = {
  [SET_CSRFTOKEN](state, csrf) {
    state.csrftoken = csrf
    document.cookie = "csrftoken=" + csrf + ";path=/"
  },
  [SET_CSFMIDDLEWARETOKEN](state, csrf) {
    state.csrfmiddlewaretoken = csrf
  },
  [SET_SESSIONID](state, id) {
    state.sessionid = id
    document.cookie = "sessionid=" + id + ";path=/"
  }
}

//actions
export const actions = {
  async [GET_CSF]() {
    const response = await this.$axios.get("/api/supporter_datas/csrf")
    commit(SET_CSRFTOKEN, response.csrftoken)
    commit(SET_CSFMIDDLEWARETOKEN, response.csrfmiddlewaretoken)
  }
}
