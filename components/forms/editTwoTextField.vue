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
      <v-text-field
        v-model="input1"
        class="mt-5"
        outlined
        :error-messages="error1 ? error1 : null"
        :error="error1 ? true : false"
        dense
        :label="labelText1"
      ></v-text-field>
      <v-text-field
        v-model="input2"
        class="mt-5"
        outlined
        :error-messages="error2 ? error2 : null"
        :error="error2 ? true : false"
        dense
        :label="labelText2"
      ></v-text-field>
      <v-row class="mt-2 pa-4">
        <v-spacer></v-spacer>
        <btn-small @click="clickAccept(input1, input2)">{{ labelButton }}</btn-small>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import BtnSmall from "../buttons/btnSmall";

export default {
  name: "editTwoTextField",
  components: {BtnSmall},
  data() {
    return {
      input1: this.inputText1,
      input2: this.inputText2
    }
  },
  props: ['clickAccept', 'clickExit', 'title', 'labelText1', 'labelText2', 'labelButton', 'loading', 'inputText1', 'inputText2', 'error1', 'error2']
}
</script>

<style lang="scss" scoped>

</style>
