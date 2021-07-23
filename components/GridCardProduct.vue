<template>
  <v-row no-gutters>
    <v-col
      v-for="(product, index) in products"
      :key="index"
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="4"
      xl="3"
    >
      <card-product :product="product"/>
    </v-col>
  </v-row>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
  name: "GridCardProduct",
  components: {CardProduct},
  data() {
    return {
      products: null,
    }
  },
  props: {
    products: Object
  },
  watch: {
    products: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.products = newV
      }
    },
  },
}
</script>

<style scoped>

</style>
