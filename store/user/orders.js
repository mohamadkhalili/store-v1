// state
import {
  CREATE_PROFILE,
  EDIT_PROFILE,
  GET_DELETE_ADDRESS,
  GET_EDIT_ADDRESS,
  GET_ORDER,
  GET_ORDER_ITEMS,
  GET_PRICE_SEND
} from '../types/action-types'
import { SET_ORDER } from '../types/mutation-types'
import { SET_ORDERS } from '~/store/types/mutation-types'

export const state = () => ({
  orders: [],
  addresses: []
})

export const mutations = {
  [SET_ORDERS] (state, orders) {
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
  [SET_ORDER] (state, order) {
    state.addresses = order.profileorders
  }
}

export const actions = {
  async [GET_ORDER_ITEMS] ({ commit }) {
    try {
      const response = await this.$axios.get('/api/orders/orderitems/')
      commit(SET_ORDERS, response.data)
    } catch (e) {
    }
  },
  async [GET_ORDER] ({ commit }) {
    const response = await this.$axios.get('/api/orders/')
    commit(SET_ORDER, response.data)
  },
  async [EDIT_PROFILE] ({ commit, dispatch }, payload) {
    try {
      await this.$axios.put('/api/orders/' + payload.id + '/', payload.data)
      dispatch(GET_ORDER)
    } catch (e) {

    }
  },
  async [CREATE_PROFILE] ({ commit, dispatch }, data) {
    try {
      const req = await this.$axios.post('/api/orders/', data)
      console.log(req)
      dispatch(GET_ORDER)
    } catch (e) {

    }
  },
  async [GET_PRICE_SEND] ({ commit }, idAddress) {
    const response = await this.$axios.get('/api/orders/', idAddress + '/')
    commit(SET_ORDER, response.data)
  },
  async [GET_EDIT_ADDRESS] ({ commit }, payload) {
    const response = await this.$axios.put('/api/orders/', payload.idAddress + '/', payload.item)
    commit(SET_ORDER, response.data)
  },
  async [GET_DELETE_ADDRESS] ({ commit }, idAddress) {
    const response = await this.$axios.delete('/api/orders/', idAddress + '/')
    commit(SET_ORDER, response.data)
  }
}

// orders/orderitems
