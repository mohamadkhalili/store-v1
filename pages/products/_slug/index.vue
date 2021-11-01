<template>
  <v-card
    v-show="products && products[0] && products[0].url != null ? !false : false"
  >
    <v-row class="d-flex pt-4" style="width: 100%; margin: 0">
      <h5 class="text-center align-center align-content-center d-flex pa-2">
        مرتب کردن بر اساس
      </h5>
      <v-select
        v-model="select"
        :items="items"
        item-text="name"
        item-value="value"
        prepend-icon="mdi-sort-variant"
        menu-props="auto"
        hide-details
        hide-selected
        label="Select"
        single-line
        color="#cb9238"
        class="pa-0 ma-0"
        style="max-width: 200px"
      />
    </v-row>
    <grid-card-product :products="products" />
  </v-card>
</template>

<script>
import { GET_PRODUCTS } from '../../../store/types/action-types'

export default {
  name: 'Index',
  data () {
    return {
      slug: this.$route.params.slug,
      select: 'newest',
      items: [
        { name: 'جدیدترین', value: 'newest' },
        { name: 'گرانترین', value: 'expensivest' },
        { name: 'ارزانترین', value: 'cheapest' },
        { name: 'پرفروش‌ترین‌', value: 'bestselling' }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.product.list.products
    }
  },
  watch: {
    select: {
      immediate: true,
      deep: true,
      async handler (select) {
        await this.$store.dispatch('product/list/' + GET_PRODUCTS, { url: this.slug, query: select })
      }
    }
  },
  async mounted () {
    await this.$store.dispatch('product/list/' + GET_PRODUCTS, { url: this.slug, query: this.select })
  }
}
</script>

<style scoped>

</style>
