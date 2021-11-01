<template>
  <v-card
    :color="data.color"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="text-h5"
          v-text="data.title"
        />

        <v-card-subtitle v-text="data.artist" />

        <v-card-actions>
          <v-btn
            v-if="data.artist === 'Ellie Goulding'"
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
          >
            <v-icon>mdi-play</v-icon>
          </v-btn>

          <v-btn
            v-else
            class="ml-2 mt-5"
            outlined
            rounded
            small
          >
            START RADIO
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="data.src" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    post: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      data: this.post
    }
  },
  watch: {
    post: {
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
