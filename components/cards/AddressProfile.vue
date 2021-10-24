<template>
  <v-col class="align-self-center ma-4 mt-2" style="min-width: 200px;max-width: 290px;height: 400px">
    <v-card class="pa-2" v-if="address" height="100%">
      <v-col>
      <v-row class="pa-2">
          <v-icon color="primary" class="ma-2">mdi-pen</v-icon>
          <v-icon color="error" class="ma-2">mdi-delete</v-icon>
      </v-row>
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">نام: </span>
        {{ address.name }}
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">تلفن: </span>
        {{ address.phone }}
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">کد پستی: </span>
        {{ address.postal_code }}
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">آدرس: </span>
        {{ address.address }}
      </v-col>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "AddressProfile",
  props: ["address"]
}
</script>

<style scoped>

</style>
