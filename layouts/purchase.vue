<template>
  <v-app>
    <header class="pa-2" style="width: 100%!important;">
      <v-row class="pa-0 ma-0">
        <v-spacer />
        <nuxt-link class="d-flex align-center text-decoration-none" to="/">
          <v-img max-width="100" height="100" src="/logo.png" />
        </nuxt-link>
        <v-spacer />
      </v-row>
    </header>
    <nuxt />
  </v-app>
</template>
<script>
export default {
  name: 'Purchase'
}
</script>

<style scoped>

</style>
