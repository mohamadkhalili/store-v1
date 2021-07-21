<template>
  <v-list-item
    class="lg12 pl-6 pr-6"
    color="primary"
    link
    v-bind="attrs"
    v-on="on"
  >
    <v-list-item-title
      plain
      color="primary"
      class="text-button"
      style="font-family: Vazir !important;"
      dark
    >
      {{ title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "StaticMenu",
  data() {
    return {
      title: this.title
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>
