<template>
  <v-card
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
      />
    </template>

    <router-link
      :to="data.url"
    >
      <v-img
        contain
        height="250"
        max-height="250"
        :src="data.image_icon.image"
      />
    </router-link>

    <router-link
      :to="data.root.url"
      class="text-decoration-none"
    >
      <h6
        pill
        class=" black--text ms-4 mt-3 text-decoration-none "

        style="color: #e51a2d !important;font-family: tanha !important;"
        :color="available_color"
      >
        {{ data.root.name }}
      </h6>
    </router-link>

    <v-card-title
      class="text-h6"
      style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;font-family: IRANYekan"
    >
      {{
        post.title
      }}
    </v-card-title>

    <v-card-text>
      <div
        style="height: 44px;max-height: 44px;flex-wrap: nowrap;overflow-x: auto;"
      >
        {{ data.brief_description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <v-chip pill :to="data.author.url" class="black--text" color="available_color" v-on="on">
            {{ data.author.name }}
          </v-chip>
          <v-spacer />

          <div class="text-caption my-4 text-subtitle-1" style="direction: ltr !important;">
            {{ data.published_date }}
          </div>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CardPostGridStyle',
  props: {
    post: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      data: this.post,
      available_color: '#e51a2d'
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
