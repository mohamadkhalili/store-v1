<template>
  <div style="border: 1px solid #eee;width: 90px;height: 32px"
       class="align-center d-flex">
    <v-btn icon @click="click_plus" :disabled="disable_plus">
      <v-icon style="width: 32px;height: 32px" color="primary">mdi-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div class="text--primary">{{ init }}</div>
    <v-spacer></v-spacer>
    <v-btn icon @click="click_minus" :disabled="disable_minus">
      <v-icon style="width: 32px;height: 32px" color="primary">mdi-minus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {ADD_CARD, GET_CARD, GET_USER, MINUS_CARD} from "@/store/types/action-types";

export default {
  name: "QuantitySelector",
  data() {
    return {
      disable_plus: false,
      disable_minus: false
    }
  },
  mounted() {
    console.log(this.min, ' next : ', this.init, ' max: ', this.max)
    if (this.init >= this.max) {
      this.disable_plus = true
    }
    if (this.init <= this.min) {
      this.disable_minus = true
    }
  },
  methods: {
    async click_plus() {
      if (this.init < this.max)
        await this.$store.dispatch('cart/' + ADD_CARD, this.productId)
      await this.$store.dispatch('cart/' + GET_CARD)
      await this.$store.dispatch('user/user/' + GET_USER)
      if (this.init < this.max) {
        this.disable_minus = false
        if (!(this.init < this.max))
          this.disable_plus = true
      } else {
        this.disable_minus = false
        this.disable_plus = true
      }
    },
    async click_minus() {
      if (this.init > this.min)
        await this.$store.dispatch('cart/' + MINUS_CARD, this.productId)
      await this.$store.dispatch('cart/' + GET_CARD)
      await this.$store.dispatch('user/user/' + GET_USER)
      if (this.init > this.min) {
        this.disable_plus = false
        if (!(this.init > this.min))
          this.disable_minus = true
      } else {
        this.disable_minus = true
        this.disable_plus = false
      }
    }
  },
  props: ['init', 'min', 'max', 'productId']
}
</script>

<style scoped>
button:hover, button:focus, button {
  color: #00000000 !important;
}
</style>
