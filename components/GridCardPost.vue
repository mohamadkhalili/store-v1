<template>
  <v-row no-gutters>
    <v-col
      v-for="(post, index) in data"
      :key="index"
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="3"
    >
      <CardPostGridStyle :post="post" />
    </v-col>
  </v-row>
</template>

<script>
import CardPostGridStyle from './CardPostGridStyle'

export default {
  name: 'GridCardPost',
  components: { CardPostGridStyle },
  props: {
    posts: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      data: []
    }
  },
  watch: {
    posts: {
      immediate: true,
      deep: true,
      handler (newV) {
        this.data = newV
      }
    }
  }
}
</script>

<style scoped>

</style>
