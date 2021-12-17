// state
import {
  CREATE_PROFILE,
  EDIT_PROFILE,
  GET_DELETE_ADDRESS,
  GET_EDIT_ADDRESS,
  GET_ORDER_ITEMS,
  GET_ORDERS,
  GET_PRICE_SEND
} from '../types/action-types'
import { SET_ORDERS } from '../types/mutation-types'
import { SET_ORDER_ITEMS } from '~/store/types/mutation-types'

export const state = () => ({
  orders: [],
  addresses: []
})

export const mutations = {
  [SET_ORDER_ITEMS] (state, orders) {
    let index = 1
    state.orders = []
    orders.orders.forEach((order) => {
      if (order) {
        state.orders.push({
          cd_peigiry: order.cd_peigiry,
          created: order.created,
          id: order.id,
          items: order.items,
          paid_type: order.paid_type,
          price: order.price,
          order_status: order.order_status,
          price_como: this.$tocomonum(order.price),
          profile_order: order.profile_order,
          index: ((index++).toString())
        })
      }
    })
  },
  [SET_ORDERS] (state, order) {
    // use only addresses or profiles information
    state.addresses = order.profileorders
  }
}

export const actions = {
  async [GET_ORDER_ITEMS] ({ commit }) {
    try {
      const response = await this.$axios.get('/api/orders/orderitems/')
      commit(SET_ORDER_ITEMS, response.data)
    } catch (e) {
    }
  },
  async [GET_ORDERS] ({ commit }) {
    const response = await this.$axios.get('/api/orders/')
    commit(SET_ORDERS, response.data)
  },
  async [EDIT_PROFILE] ({ commit, dispatch }, payload) {
    try {
      await this.$axios.put('/api/orders/' + payload.id + '/', payload.data)
      dispatch(GET_ORDERS)
    } catch (e) {

    }
  },
  async [CREATE_PROFILE] ({ commit, dispatch }, data) {
    try {
      await this.$axios.post('/api/orders/', data)
      dispatch(GET_ORDERS)
    } catch (e) {

    }
  },
  async [GET_PRICE_SEND] ({ commit }, idAddress) {
    const response = await this.$axios.get('/api/orders/', idAddress + '/')
    commit(SET_ORDERS, response.data)
  },
  async [GET_EDIT_ADDRESS] ({ commit }, payload) {
    const response = await this.$axios.put('/api/orders/', payload.idAddress + '/', payload.item)
    commit(SET_ORDERS, response.data)
  },
  async [GET_DELETE_ADDRESS] ({ commit }, idAddress) {
    const response = await this.$axios.delete('/api/orders/', idAddress + '/')
    commit(SET_ORDERS, response.data)
  }
}
// orders/orderitems
