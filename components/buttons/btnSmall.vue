<template>
  <v-btn
    class="white--text btn_main_product"
    color="red darken-1"
    @click="click"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: "btnSmall",
  methods: {
    click() {
      this.$emit("click");
    }
  },
}
</script>

<style scoped>

</style>
