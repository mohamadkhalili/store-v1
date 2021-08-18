import {GET_CARD, GET_USER} from "../store/types/action-types";

export default function ({store}) {
  store.dispatch('cart/' + GET_CARD)
  store.dispatch('user/user/' + GET_USER)
}
