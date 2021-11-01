<template>
  <v-list>
    <v-list-item
      v-for="(menuchild, index) in menuchilds"
      :key="index"
      class="pl-12"
      color="#cb9238"
      :to="menuchild.url"
    >
      <v-list-item-title>
        {{ menuchild.name }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MenuChild',
  props: {
    menuchilds: {
      default: null,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
