<template>
  <v-row no-gutters>
    <v-col
      v-for="n in 5"
      :key="n"
      cols="12"
      sm="3"
    >
      <card-product/>
    </v-col>
  </v-row>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
  name: "GridCardProduct",
  components: {CardProduct}
}
</script>

<style scoped>

</style>
