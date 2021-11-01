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
        v-for="(product, index) in data"
        :key="index"
        align="right"
      >
        <CardProductRelated :product="product" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import CardProductRelated from './CardProductRelated'

export default {
  name: 'CardProductRelatedLList',
  components: { CardProductRelated },
  props: {
    products: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      data: this.products
    }
  },
  watch: {
    products: {
      immediate: true,
      deep: true,
      handler (newV) {
        this.data = newV
      }
    }
  }
}
</script>

<style scoped>

</style>
