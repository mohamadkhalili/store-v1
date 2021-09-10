<template>
  <v-list>
    <template v-for="(order,i) in orders" v-if="i<page*5 && i>=((page*5)-5)">
      <v-list-item>
        <v-card class="pa-3 mt-10" style="width: 100%;max-width: 100%;min-width: 100%">
          <v-row>
            <v-col class="pe-2" style="max-width: 100px">
              {{ order.created_persian }}
            </v-col>
            <v-col class="pe-2" style="max-width: 70px">
              {{ order.id_persian }}
            </v-col>
            <v-col class="pe-2" style="max-width: 150px">
              {{ order.order_status }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pe-6 text-left" style="max-width: 250px">
              <nuxt-link :to="'orders/'+order.id" class="text-decoration-none">
                <p class="text-subtitle-1" style="color: #00bfd6">مشاهده سفارش ></p>
              </nuxt-link>
            </v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="pt-0">
              <p>
                <span class="grey--text">مبلغ کل: </span>
                <span>{{ order.price_persian }} تومان</span>
              </p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col
              v-for="(item,i) in order.items"
              :key="i"
              class="d-flex child-flex pt-6"
              style="max-width: 180px"
            >
              <nuxt-link :to="item.product.url">
                <v-img
                  :src="item.product.image_icon.image"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >

                </v-img>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </template>
    <v-row>
      <v-col class="mt-6" style="max-width: 100%">
        <div class="text-center">
          <v-pagination
            color="rgb(203, 146, 56)"
            v-model="page"
            :length="(parseInt(orders.length/5))+1"
            :total-visible="5"
            circle
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
import {GET_ORDERS} from "@/store/types/action-types";

export default {
  name: "index",
  data() {
    return {
      page: 1,
    }
  },
  async mounted() {
    await this.$store.dispatch('user/orders/' + GET_ORDERS)
  },
  computed: {
    orders() {
      return this.$store.state.user.orders.orders
    }
  }
}
</script>

<style scoped>

</style>
