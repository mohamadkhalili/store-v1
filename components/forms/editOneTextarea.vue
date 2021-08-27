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
        <v-spacer></v-spacer>
        <v-btn
          class="mt-3 ml-2"
          text
          icon
          color="red lighten-2"
          @click="clickExit"
        >
          <v-icon style="color: #515151;">mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-textarea
        v-model="input"
        class="mt-5"
        outlined
        :error-messages="error ? error : null"
        :error="error ? true : false"
        dense
        :label="labelText"
      ></v-textarea>

      <v-row class="mt-2 pa-4">
        <v-spacer></v-spacer>
        <btn-small @click="clickAccept(input)">{{ labelButton }}</btn-small>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import BtnSmall from "../buttons/btnSmall";

export default {
  name: "editOneTextarea",
  components: {BtnSmall},
  data() {
    return {
      input: this.inputText,
    }
  },
  props: ['clickAccept', 'clickExit', 'title', 'labelText', 'labelButton', 'loading', 'inputText', 'error']
}
</script>

<style lang="scss" scoped>

</style>
