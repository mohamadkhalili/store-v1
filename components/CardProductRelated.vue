<template>
  <v-card
    :loading="loading"
    class=" pa-2 ma-2"
    max-width="274"
    max-height="421"
    height="421"
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
        height="200"
        max-height="200"
        :src="data.image_icon.image"
      />
    </router-link>

    <v-card-title style="height: 64px;max-height: 64px;flex-wrap: nowrap;overflow-x: auto;">
      {{
        data.title
      }}
    </v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <v-row
          align="center"
          class="mx-0"
        >
          <v-spacer />
          <h3 class="my-4">
            {{ data.price }} تومان
          </h3>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CardProductRelated',
  props: {
    product: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      data: this.product
    }
  },
  watch: {
    product: {
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
