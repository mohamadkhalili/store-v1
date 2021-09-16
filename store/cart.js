//state
import {ADD_CARD, DELETE_CARD, GET_CARD} from "./types/action-types";
import {SET_CARD} from "./types/mutation-types";

export const state = () => ({
  products: [],
  count: '',
  total_prices: '',
  count_number: 0
})

//mutations
export const mutations = {
  [SET_CARD](state, data) {
    state.products = data.sabad

    data.sabad.forEach((value, index) => {
      state.products[index].price = this.$tocomonum(value.price)
      state.products[index].quantity = this.$tocomonum(value.quantity.toString())
      state.products[index].quantity_number = value.quantity
      state.products[index].total_price = this.$tocomonum(value.total_price)
    })
    state.count = this.$tocomonum(data.products_count.toString())
    state.count_number = data.products_count
    state.total_prices = this.$tocomonum(data.total_prices)
  }
}

//actions
export const actions = {
  async [GET_CARD]({commit}) {
    const response = await this.$axios.get('/api/supporter_datas/products/')
    await commit(SET_CARD, response.data)
  },
  async [DELETE_CARD]({commit, dispatch}, id) {
    await this.$axios.post('/api/cart/remove/', {'product_id': id})
    dispatch(GET_CARD)
  },
  async [ADD_CARD]({commit, dispatch}, id) {
    await this.$axios.post('/api/cart/add/', {'product_id': id})
    dispatch(GET_CARD)
  }
}
