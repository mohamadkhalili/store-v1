<template>
  <v-btn
    class="white--text btn_main_product"
    color="red darken-1"
    @click="click"
    :to="to"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: "btnSmall",
  props: ['to'],
  methods: {
    click() {
      this.$emit("click");
    }
  },
}
</script>

<style scoped>

</style>
