<template>
  <v-btn
    class="white--text btn_main_product"
    color="red darken-1"
    :to="to"
    @click="click"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BtnSmall',
  props: {
    to: {
      default: '',
      type: String
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
