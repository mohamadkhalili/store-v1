<template>
  <v-sheet
    class="ma-6"
    max-width="100%"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
      multiple
    >
      <v-slide-item
        v-for="(product, index) in products"
        :key="index"
        v-slot="{ active, toggle }"
        align="right"
      >
        <CardProductRelated :product="product"/>

      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import CardProductRelated from "./CardProductRelated";

export default {
  name: "CardProductRelatedLList",
  components: {CardProductRelated},
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
