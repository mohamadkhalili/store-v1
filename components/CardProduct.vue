<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 pa-2"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="product.image_icon"
    ></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="product.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ product.rating }}
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <div class="my-4 text-subtitle-1">
            {{ product.price }}
          </div>

          <v-chip class="grey--text ms-4" :color=" product.available ? available_color : null">
            {{ product.available ? "موجود" : "ناموجود" }}
          </v-chip>
        </v-row>
      </div>

      <div>{{ product.brief_description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        افزودن به سبد خرید
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardProduct",
  data() {
    return {
      product: null,
      available_color: "green accent-2"
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
      }
    },
  },
}
</script>

<style scoped>

</style>
