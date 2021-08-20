<template>
  <v-list>
    <v-list-item class="pl-12" color="#cb9238" v-for="(menuchild, index) in menuchilds" :key="index"
                 :to="menuchild.url">
      <v-list-item-title>
        {{ menuchild.name }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: "MenuChild",
  data() {
    return {
      menu: null
    }
  },
  props: {
    menuchilds: Array
  },
  watch: {
    menuchilds: {
      immediate: true,
      deep: true,
      handler(newV, oldV) {
        console.log('chiolldsss: ', newV)
      }
    },
  }
}
</script>

<style scoped>

</style>
