<template>
  <h1>در حال خروج</h1>
</template>

<script>

import { SIGNOUT } from '../../store/types/action-types'

export default {
  name: 'Logout',
  created () {
    this.logout()
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/user/' + SIGNOUT)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
