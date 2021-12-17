<template>
  <v-card height="210" class="ma-2 mb-6">
    <v-row style="max-height: 140px">
      <v-col style="width: 180px !important;max-width: 180px">
        <nuxt-link
          :to="product.url"
        >
          <v-img
            max-height="150px"
            max-width="180px"
            :src="product.image_icon.image"
          />
        </nuxt-link>
      </v-col>
      <v-card-title>
        {{ product.name }}
      </v-card-title>
    </v-row>
    <v-row style="max-height: 30px">
      <v-col
        class="ml-auto justify-center align-self-center center
"
      >
        <v-row style="width: 180px !important;" class="mr-2 text-center justify-center align-center">
          <quantity-selector
            :max="product.stock"
            :min="1"
            :init="product.quantity_number"
            :product-id="product.id"
          />
          <a @click="deleteProduct(product.id)">
            <v-card-subtitle style="color: black">
              <v-icon
                small
              >
                mdi-delete
              </v-icon>
              حذف
            </v-card-subtitle>
          </a>
        </v-row>
      </v-col>
      <v-col class="align-self-end mr-auto">
        <v-card-title class="d-block" style="text-align: left !important;">
          {{ product.total_price }}
          تومان
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import QuantitySelector from '@/components/objects/QuantitySelector'
import { DELETE_CARD, GET_CARD } from '@/store/types/action-types'

export default {
  name: 'CardCart',
  components: { QuantitySelector },
  props: {
    product: {
      default: null,
      type: Object
    }
  },
  methods: {
    async deleteProduct (productId) {
      await this.$store.dispatch('cart/' + DELETE_CARD, productId)
      await this.$store.dispatch('cart/' + GET_CARD)
    }
  }
}
</script>

<style scoped>

</style>
