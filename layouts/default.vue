<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Header from "../components/Header";

export default {
  components: {Header},
  data() {
    return {}
  }
}
</script>
