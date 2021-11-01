<template>
  <v-card
    :loading="loading"
    :disabled="loading"
  >
    <v-col class="pa-4">
      <v-row>
        <v-card-title style="font-size: 1.25rem !important;">
          {{ title }}
        </v-card-title>
        <v-spacer />
        <v-btn
          class="mt-3 ml-2"
          text
          icon
          color="red lighten-2"
          @click="clickExit"
        >
          <v-icon style="color: #515151;">
            mdi-close
          </v-icon>
        </v-btn>
      </v-row>
      <v-divider class="mt-2" />
      <v-textarea
        v-model="input"
        class="mt-5"
        outlined
        :error-messages="error ? error : null"
        :error="error ? true : false"
        dense
        :label="labelText"
      />
      <v-row class="mt-2 pa-4">
        <v-spacer />
        <btn-small @click="clickAccept(input)">
          {{ labelButton }}
        </btn-small>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import BtnSmall from '../buttons/btnSmall'

export default {
  name: 'EditOneTextarea',
  components: { BtnSmall },
  props: {
    inputText: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    labelText: {
      default: '',
      type: String
    },
    labelButton: {
      default: '',
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    error: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      input: this.inputText
    }
  },
  methods: {
    clickAccept () {
      this.$emit('clickAccept', this.input)
    },
    clickExit () {
      this.$emit('clickExit')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
