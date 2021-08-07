//mutation types
import {SET_CSRFTOKEN} from "./types/mutation-types";


//state
export const state = () => ({
  csrftoken: null,
  csrfmiddlewaretoken: null,
  sessionid: null
})

//mutations
export const mutations = {
  [SET_CSRFTOKEN](state, csrf) {
    document.cookie = "csrftoken=" + csrf + ";path=/"
  }
}
