<template>
  <v-col class="align-self-center ma-4 mt-2" style="min-width: 250px;max-width: 310px;height: 470px">
    <v-card v-if="address" class="pa-2" height="100%">
      <v-col>
        <v-row class="pa-2">
          <v-icon color="edit" class="ma-2" @click="edit">
            mdi-pen
          </v-icon>
          <v-icon color="delete" class="ma-2" @click="remove">
            mdi-delete
          </v-icon>
        </v-row>
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">نام: </span>
        {{ address.first_name }}
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">نام خانوادگی: </span>
        {{ address.last_name }}
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
        <span class="grey--text subtitle-2">استان: </span>
        {{ address.state.name }}
      </v-col>
      <v-col>
        <span class="grey--text subtitle-2">شهر: </span>
        {{ address.town.name }}
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
      <address-edit-dialog :profile="address" />
    </v-dialog>
  </v-col>
</template>

<script>
import { GET_DELETE_ADDRESS } from '../../store/types/action-types'
import AddressEditDialog from '../pages/orders/AddressEditDialog'

export default {
  name: 'AddressProfile',
  components: { AddressEditDialog },
  props: {
    address: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      addressDialog: false
    }
  },
  methods: {
    edit () {
      this.addressDialog = true
    },
    remove () {
      this.$store.dispatch('user/orders/' + GET_DELETE_ADDRESS, this.address.id)
    }
  }
}
</script>

<style scoped>

</style>
