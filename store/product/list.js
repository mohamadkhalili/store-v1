//state
import {GET_PRODUCTS} from "../types/action-types";
import {CLEAR_PRODUCTS, SET_PRODUCTS} from "../types/mutation-types";

export const state = () => ({
  products: []
})


//mutations
export const mutations = {
  [SET_PRODUCTS](state, list) {

    state.products = list.products


  },
  [CLEAR_PRODUCTS](state) {
    state.products = []
  }
}

//actions
export const actions = {
  async [GET_PRODUCTS]({commit}, data) {
    commit(CLEAR_PRODUCTS)
    try {
      const response = await this.$axios.get('/api/products/' + data.url + '/' + '?select=' + data.query)
      console.log(response)
      commit(SET_PRODUCTS, response.data)
    } catch (e) {
      console.log(e)
    }

  }
}
