<template>
  <v-list-item
    style="width: 100%;max-width: 100%;max-height: 100% !important;padding: 0;margin: 0;"
    class="align-self-center"
  >
    <v-list-item-content
      class="d-block"
      style="box-sizing: border-box !important; max-height: 100% !important;"
    >
      <p
        :style="'color: #939393;font-size: 130%;white-space: nowrap;text-align: initial;overflow: hidden;text-overflow: ellipsis;text-align: right;direction: '+direction"
        class="d-block pr-2 align-self-center overflow-hidden"
      >
        <span
          style="color: #bababa;font-size: 60% !important;direction: rtl;text-align: inherit;"
          class="d-block overflow-hidden pb-2"
        >{{ title }}</span>
        {{ value }}
      </p>
    </v-list-item-content>
    <v-list-item-icon class="pa-2 align-self-center">
      <v-btn
        class="ma-2"
        text
        icon
        color="primary"
        @click="click"
      >
        <v-icon style="color: #515151;">
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  name: 'InfoWithTitle',
  props: {
    direction: {
      type: String,
      default: 'rtl'
    },
    title: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>

</style>
