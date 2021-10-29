<template>
  <v-card class="pa-4">
    <v-card-title class="pr-0 pb-5">
      ویرایش نشانی
    </v-card-title>

    <v-text-field
      outlined
      label="نام"
    />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        text
        @click="dialogInternal = false"
      >
        ثبت
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AddressEditForm',
  props: {
    dialog: {
      type: Boolean
    }
  },
  data () {
    return {
      dialogInternal: this.dialog
    }
  },
  watch: {
    dialog (prev) {
      this.dialogInternal = prev
    }
  }
}
</script>

<style scoped>

</style>
