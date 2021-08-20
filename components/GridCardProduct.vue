<template>
  <v-row no-gutters>
    <v-col
      v-if="products != []"
      v-for="(product, index) in products"
      :key="index"
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
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
  props: {
    products: Array
  }
}
</script>

<style scoped>

</style>
