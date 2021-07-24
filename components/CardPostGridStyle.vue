<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 pa-2"
    max-width="374"
    max-height="521"
    height="521"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <router-link
      :to="post.url">
      <v-img
        height="250"
        max-height="250"
        :src="post.image_icon"
      ></v-img>
    </router-link>

    <v-card-title style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;">{{
        post.title
      }}
    </v-card-title>

    <v-card-text>

      <div
        style="height: 44px;max-height: 44px;flex-wrap: nowrap;overflow-x: auto;"
      >{{ post.brief_description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
</template>

<script>
export default {
  name: "CardPostGridStyle",
  data() {
    return {
      post: null,
      available_color: "green accent-2"
    }
  },
  props: {
    post: Object
  },
  watch: {
    post: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.post = newV
      }
    },
  },
}
</script>

<style scoped>

</style>
