<template>
  <v-btn @click="clear"></v-btn>
</template>

<script>

import {SIGNOUT} from "../../store/types/action-types";

export default {
  name: "logout",
  created() {
    this.logout()
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/user/' + SIGNOUT)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
