<template>
  <v-card
    class="mx-auto my-12 pa-2"
    max-width="374"
    max-height="521"
    height="521"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      />
    </template>

    <router-link
      :to="product.url"
    >
      <v-img
        contain
        height="250"
        max-height="250"
        :src="product.image_icon.image"
      />
    </router-link>

    <v-card-title style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;">
      {{
        product.name
      }}
    </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="product.rating"
          color="amber"
          background-color="grey lighten-1"
          dense
          half-increments
          readonly
          size="14"
        />

        <div class="grey--text ms-4">
          {{ product.rating }}
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <h3 class="my-4">
            {{ price_persian }} تومان
          </h3>
          <v-spacer />

          <v-chip class="black--text ms-4" :color=" product.available ? available_color : null">
            {{ product.available ? "موجود" : "ناموجود" }}
          </v-chip>
        </v-row>
      </div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-actions>
      <v-col class="col-auto mr-auto">
        <v-btn
          class="white--text btn_main_product"
          color="red darken-1"
          x-large
          :disabled="product && product.available ? false : true"
          @click="add_product(product.id)"
        >
          افزودن به سبد خرید
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import { ADD_CARD } from '../store/types/action-types'

export default {
  name: 'CardProduct',
  props: {
    product: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      available_color: 'green accent-2',
      price_persian: ''
    }
  },
  watch: {
    product: {
      immediate: true,
      deep: true,
      handler (newV) {
        this.price_persian = this.$tocomonum(this.product.price)
      }
    }
  },
  methods: {
    add_product (id) {
      this.$store.dispatch('cart/' + ADD_CARD, id)
    }
  }
}
</script>

<style>

</style>
