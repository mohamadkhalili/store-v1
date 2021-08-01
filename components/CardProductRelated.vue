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
        console.log(this.product.url)
        this.price_persian = this.getPersianNumbers(this.product.price)
        console.log(this.price_persian)
      }
    },
  },
  methods: {
    getPersianNumbers(price_number) {
      var out = ""
      const price_l = price_number.length
      for (let i = 0; i < price_l; i++) {
        let lastnumber = price_number % 10;
        price_number = parseInt(price_number / 10)
        if (i % 3 == 0 && i < price_l - 1 && i > 1) {
          out = "," + out
        }
        if (lastnumber == 0) {
          out = "۰" + out
        } else if (lastnumber == 1) {
          out = "۱" + out
        } else if (lastnumber == 2) {
          out = "۲" + out
        } else if (lastnumber == 3) {
          out = "۳" + out
        } else if (lastnumber == 4) {
          out = "۴" + out
        } else if (lastnumber == 5) {
          out = "۵" + out
        } else if (lastnumber == 6) {
          out = "۶" + out
        } else if (lastnumber == 7) {
          out = "۷" + out
        } else if (lastnumber == 8) {
          out = "۸" + out
        } else if (lastnumber == 9) {
          out = "۹" + out
        }

      }
      return out
    }
  }
}
</script>

<style scoped>

</style>
