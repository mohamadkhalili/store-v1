//state
import {GET_ORDERS} from "../types/action-types";
import {SET_ORDERS} from "~/store/types/mutation-types";

export const state = () => ({
  orders: []
})


export const mutations = {
  [SET_ORDERS](state, orders) {
    let index = 1
    state.orders = []
    orders.orders.forEach((order) => {
      if (order) {
        state.orders.push({
          'cd_peigiry': order.cd_peigiry,
          'created': order.created,
          'created_persian': this.$tofarsinonum(order.created),
          'id': order.id,
          'id_persian': this.$tofarsinonum(order.id.toString()),
          'items': order.items,
          'paid_type': order.paid_type,
          'price': order.price,
          'order_status': order.order_status,
          'price_persian': this.$tofarsi(order.price),
          'profile_order': order.profile_order,
          'index': this.$tofarsinonum((index++).toString())
        })
      }
    })
  }
}

export const actions = {
  async [GET_ORDERS]({commit}) {
    const response = await this.$axios.get('/api/orders/orderitems/')
    commit(SET_ORDERS, response.data)
  }
}

//orders/orderitems
