<template>
  <section>
    <v-row>
      <v-col cols="8">
        <template v-for="(product,i) in products">
          <card-cart :key="i" :product="product" />
        </template>
      </v-col>
      <v-col class="pr-0" cols="4">
        <v-card class="mt-2 text-center">
          <v-row class="pt-4 pb-4">
            <span class="pr-8 text-h6">
              جمع سبد خرید
            </span>
            <v-spacer />
            <span class="pl-8 text-h6">
              <span>{{ totalPrices }}</span> تومان
            </span>
          </v-row>
          <v-card-text class="text-body-2">
            هزینه و زمان ارسال در ادامه بر اساس آدرس و نحوه ارسال مشخص خواهد شد.
          </v-card-text>
          <v-btn to="/shipping" class="ma-6 primary">
            ادامه فرآیند خرید
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import CardCart from '@/components/cards/CardCart'
import { GET_ORDERS } from '~/store/types/action-types'

export default {
  name: 'Cart',
  components: { CardCart },
  computed: {
    products () {
      return this.$store.state.cart.products
    },
    totalPrices () {
      return this.$store.state.cart.total_prices
    },
    addresses () {
      return this.$store.state.user.orders.addresses
    }
  },
  mounted () {
    this.$store.dispatch('user/orders/' + GET_ORDERS)
  }
}
</script>

<style>

</style>
