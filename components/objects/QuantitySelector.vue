<template>
  <div style="border: 1px solid #eee;width: 100px;height: 40px"
       class="align-center d-flex">
    <v-btn icon @click="click_plus" :disabled="disable_plus">
      <v-icon style="width: 32px;height: 32px" color="primary">mdi-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div class="text--primary">{{ count }}</div>
    <v-spacer></v-spacer>
    <v-btn icon @click="click_minus" :disabled="disable_minus">
      <v-icon style="width: 32px;height: 32px" color="primary">mdi-minus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "QuantitySelector",
  data() {
    return {
      count: 0,
      disable_plus: false,
      disable_minus: false
    }
  },
  mounted() {
    if (this.count < this.max) {
      this.disable_minus = true
    }
    if (this.count > this.min) {
      this.disable_plus = true
    }
  },
  methods: {
    click_plus() {
      if (this.count < this.max) {
        this.count++
        this.disable_minus = false
        if (!(this.count < this.max))
          this.disable_plus = true
      }
    },
    click_minus() {
      if (this.count > this.min) {
        this.count--
        this.disable_plus = false
        if (!(this.count > this.min))
          this.disable_minus = true
      }
    }
  },
  props: ['min', 'max']
}
</script>

<style scoped>
button:hover, button:focus, button {
  color: #00000000 !important;
}
</style>
