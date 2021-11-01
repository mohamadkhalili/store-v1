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
      <v-text-field
        v-model="input1"
        class="mt-5"
        outlined
        :error-messages="error1 ? error1 : null"
        :error="error1 ? true : false"
        dense
        :label="labelText1"
      />
      <v-text-field
        v-model="input2"
        class="mt-5"
        outlined
        :error-messages="error2 ? error2 : null"
        :error="error2 ? true : false"
        dense
        :label="labelText2"
      />
      <v-row class="mt-2 pa-4">
        <v-spacer />
        <btn-small @click="clickAccept(input1, input2)">
          {{ labelButton }}
        </btn-small>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import BtnSmall from '../buttons/btnSmall'

export default {
  name: 'EditTwoTextField',
  components: { BtnSmall },
  props: {
    inputText1: {
      default: '',
      type: String
    },
    inputText2: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    labelText1: {
      default: '',
      type: String
    },
    labelText2: {
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
    error1: {
      default: '',
      type: String
    },
    error2: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      input1: this.inputText1,
      input2: this.inputText2
    }
  },
  methods: {
    clickAccept () {
      this.$emit('clickAccept', this.input1, this.input2)
    },
    clickExit () {
      this.$emit('clickExit')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
