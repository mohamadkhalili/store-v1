<template>
  <v-col class="align-self-center ma-4 mt-2" style="min-width: 200px;max-width: 290px;height: 400px">
    <v-card class="pa-2" v-if="address" height="100%">
      <v-col>
      <v-row class="pa-2">
          <v-icon color="edit" class="ma-2" @click="edit">mdi-pen</v-icon>
          <v-icon color="delete" class="ma-2" @click="remove">mdi-delete</v-icon>
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
    <v-dialog
      v-model="addressDialog"
      width="500"
    >
            <address-edit-form/>
    </v-dialog>

  </v-col>
</template>

<script>
import {GET_DELETE_ADDRESS} from "../../store/types/action-types";
import AddressEditForm from "../pages/orders/AddressEditDialog";

export default {
  name: "AddressProfile",
  components: {AddressEditForm},
  props: ["address"],
  data() {
    return{
      addressDialog: false
    }
  },
  methods: {
    edit(){
      this.addressDialog = true
    },
    remove(){
      this.$store.dispatch('user/orders/'+GET_DELETE_ADDRESS,this.address.id)
    }
  }
}
</script>

<style scoped>

</style>
