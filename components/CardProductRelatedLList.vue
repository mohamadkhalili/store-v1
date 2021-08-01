<template>
  <v-sheet
    class="mx-auto"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
      center-active
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

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="text-h6">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
import CardProductRelated from "./CardProductRelated";

export default {
  name: "CardProductRelatedLList",
  components: {CardProductRelated},
  data() {
    return {
      model: null,
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
