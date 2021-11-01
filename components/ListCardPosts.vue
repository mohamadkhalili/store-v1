<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
    >
      <card-post :post="item" />
    </v-col>
  </v-row>
</template>

<script>
import CardPost from './CardPost'

export default {
  name: 'ListCardPosts',
  components: { CardPost },
  data () {
    return {
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
