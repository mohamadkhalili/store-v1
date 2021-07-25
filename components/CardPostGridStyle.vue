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

    <router-link
      :to="post.root.url" class="text-decoration-none">
      <h6 pill :to="post.root.url" class=" black--text ms-4 mt-3 text-decoration-none "

          style="color: #e51a2d !important;font-family: tanha !important;"
          :color="available_color">
        {{ post.root.name }}

      </h6>
    </router-link>

    <v-card-title class="text-h6"
                  style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;font-family: IRANYekan">{{
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

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <v-chip v-on="on" pill :to="post.root.url" class="black--text" color="available_color">
            {{ post.author.name }}
          </v-chip>
          <v-spacer></v-spacer>

          <div class="text-caption my-4 text-subtitle-1">
            {{ post.published_date }}
          </div>


        </v-row>
      </div>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "CardPostGridStyle",
  data() {
    return {
      post: null,
      available_color: "#e51a2d"
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
