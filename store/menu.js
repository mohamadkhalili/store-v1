//state
import {SET_MENU} from "./types/mutation-types";
import {GET_MENU} from "./types/action-types";

export const state = () => ({
  menus: [],
})

//mutations
export const mutations = {
  [SET_MENU](state, data) {
    state.menus = data
  }
}

//actions
export const actions = {
  async [GET_MENU]({commit}) {
    const response = await this.$axios.get('/api/products/roots/')
    commit(SET_MENU, response.data.product_menues)
  }
}
