<template>
  <v-card class="mt-12">
    <v-row class="px-2">
      <v-btn
        class="ma-2"
        icon
        color="primary"
        href="/users/orders"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-col class="pe-2" style="max-width: 120px">
        جزئیات سفارش
      </v-col>
      <v-spacer />
      <v-col class="pe-2" style="max-width: 100px">
        {{ order && order.created }}
      </v-col>
    </v-row>
    <v-divider class="ma-4" />
    <v-row class="px-2">
      <v-col class="pe-2">
        <span>نام تحویل گیرنده: </span>
        نام تحویل گیرنده: {{ order && order.profile_order.name }}
      </v-col>
    </v-row>
    <v-row class="px-2 pt-0">
      <v-col class="pe-2 pt-0">
        <span>آدرس: </span>
        آدرس: {{ order && order.profile_order.address }}
      </v-col>
    </v-row>
    <v-row class="px-2 pt-0">
      <v-col class="pe-2 pt-0">
        <span>جمع قیمت کالا ها: </span>
        {{ order && order.price_como }}
        تومان
      </v-col>
    </v-row>
    <v-divider class="mt-4 mb-4 pb-4" />
    <v-row class="px-2 pt-0">
      <v-col class="pe-2 pt-0" style="max-width: 230px">
        <span>زمان تحویل: </span>
        {{ order && order.price_como }}
        تومان
      </v-col>
      <v-col class="pe-2 pt-0">
        <span>هزینه ارسال: </span>
        {{ order && order.price_como }}
        تومان
      </v-col>
    </v-row>
    <template
      v-if="order"
    >
      <template v-for="(item,i) in order.items">
        <v-col :key="i" class="pa-0 ma-0">
          <v-divider class="mt-4 mb-4 pb-4 mr-4 ml-4" />
          <v-row class="px-2 pt-0">
            <nuxt-link class="ma-4" :to="item.product.url">
              <v-img width="140px" height="140px" contain :src="item.product.image_icon.image" />
            </nuxt-link>
            <v-col>
              <v-row>
                <v-col class="mt-8 pe-2 pt-0 text-h6">
                  {{ item.product.name }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-8 pe-2 pt-0">
                  <span>تعداد: </span>
                  {{ item.quantity }}
                </v-col>
                <v-spacer />
                <v-col class="mt-8 pe-2 pt-0 ml-6 text-left">
                  <span>قیمت واحد: </span>
                  {{ item.price_como }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </template>
    </template>
    <v-divider class="mt-4 mb-4 pb-4" />
  </v-card>
</template>

<script>
import { GET_ORDER_ITEMS } from '@/store/types/action-types'

export default {
  name: 'Index',
  data () {
    return {
      id: this.$route.params.id,
      order: null
    }
  },
  computed: {},
  async mounted () {
    await this.$store.dispatch('user/orders/' + GET_ORDER_ITEMS)
    const orders = this.$store.state.user.orders.orders
    orders.forEach((order) => {
      if (order.id === this.id) {
        this.order = order
        this.order.items.forEach((item, index) => {
          this.order.items[index].price_como = this.$tocomonum(item.price)
        })
      }
    })
  }
}
</script>

<style scoped>
span {
  color: #81858b;
}
</style>
