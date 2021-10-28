import {GET_CARD, GET_USER} from "@/store/types/action-types";
import {SET_ERROR_PHONE_PASS} from "../store/types/mutation-types";

export default async function ({store}) {
  await store.dispatch('cart/' + GET_CARD)
  await store.dispatch('user/user/' + GET_USER)

}
