<template>
  <v-col>
    <template v-for="(product,i) in products">
      <card-cart :key="i" :product="product"/>
    </template>
  </v-col>
</template>

<script>
import CardCart from "@/components/cards/CardCart";

export default {
  name: "cart",
  components: {CardCart},
  computed: {
    products() {
      return this.$store.state.cart.products
    }
  }
}
</script>

<style>

</style>
