<template>
  <v-card
    :loading="loading"
    class=" pa-2 ma-2"
    max-width="274"
    max-height="421"
    height="421"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <router-link
      :to="product.url">
      <v-img
        contain
        height="200"
        max-height="200"
        :src="product.image_icon.image"
      ></v-img>
    </router-link>

    <v-card-title style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;">{{
        product.title
      }}
    </v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <v-spacer></v-spacer>
          <h3 class="my-4">
            {{ price_persian }} تومان
          </h3>

        </v-row>
      </div>

    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "CardProductRelated",
  data() {
    return {
      product: null,
      price_persian: "",
    }
  },
  props: {
    product: Object
  },
  watch: {
    product: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.product = newV
        this.price_persian = this.$tocomonum(this.product.price)
      }
    },
  },
  methods: {}
}
</script>

<style scoped>

</style>
