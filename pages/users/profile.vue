<template>
  <div>
    <v-row class="pt-8">
      <v-col cols="6">
        <v-card height="400px">
          <v-row style="height: 25% !important;" no-gutters>
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title
                title="نام و نام خانوادگی:"
                :value="first_name + ' ' + last_name"
                :click="nameDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="name_dialog"
                persistent
                max-width="400"
              >
                <edit-two-text-field
                  :loading="loading"
                  :click-exit="nameDialogClick"
                  :click-accept="nameClickAccept"
                  title="نام و نام خانوادگی"
                  label-text1="نام"
                  label-text2="نام خانوادگی"
                  label-button="ثبت اطلاعات"
                  :input-text1="first_name"
                  :input-text2="last_name"
                  :error1="error.first_name"
                  :error2="error.last_name"
                />
              </v-dialog>
            </v-col>
            <v-divider
              vertical
            />
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title
                title="شماره تلفن همراه:"
                :value="phone"
                :click="phoneDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="phone_dialog"
                persistent
                max-width="400"
              >
                <edit-one-text-field
                  :loading="loading"
                  :click-exit="phoneDialogClick"
                  :click-accept="phoneClickAccept"
                  title="شماره تلفن همراه"
                  label-text="شماره همراه"
                  label-button="ثبت اطلاعات"
                  :input-text="phone"
                  :error="error.phone"
                />
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider />
          <v-row style="height: 25% !important;" no-gutters>
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title title="ایمیل:" :value="email" :click="emailDialogClick" direction="rtl" />

              <v-dialog
                v-model="email_dialog"
                persistent
                max-width="400"
              >
                <edit-one-text-field
                  :loading="loading"
                  :click-exit="emailDialogClick"
                  :click-accept="emailClickAccept"
                  title="ایمیل"
                  label-text="ایمیل"
                  label-button="ثبت اطلاعات"
                  :input-text="email"
                  :error="error.email"
                />
              </v-dialog>
            </v-col>
            <v-divider
              vertical
            />
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title
                title="کد ملی:"
                :value="national_code"
                :click="nationalCodeDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="national_code_dialog"
                persistent
                max-width="400"
              >
                <edit-one-text-field
                  :loading="loading"
                  :click-exit="nationalCodeDialogClick"
                  :click-accept="nationalCodeClickAccept"
                  title="کد ملی"
                  label-text="کد ملی"
                  label-button="ثبت اطلاعات"
                  :input-text="national_code"
                  :error="error.national_code"
                />
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider />
          <v-row style="height: 25% !important;" no-gutters>
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title
                title="کد پستی:"
                :value="postal_code"
                :click="postalCodeDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="postal_code_dialog"
                persistent
                max-width="400"
              >
                <edit-one-text-field
                  :loading="loading"
                  :click-exit="postalCodeDialogClick"
                  :click-accept="postalCodeClickAccept"
                  title="کد پستی"
                  label-text="کد پستی"
                  label-button="ثبت اطلاعات"
                  :input-text="postal_code"
                  :error="error.postal_code"
                />
              </v-dialog>
            </v-col>
            <v-divider
              vertical
            />
            <v-col cols="6" class="align-center align-self-center">
              <info-with-title
                title="شغل:"
                :value="job"
                :click="jobDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="job_dialog"
                persistent
                max-width="400"
              >
                <edit-one-text-field
                  :loading="loading"
                  :click-exit="jobDialogClick"
                  :click-accept="jobClickAccept"
                  title="شغل"
                  label-text="شغل"
                  label-button="ثبت اطلاعات"
                  :input-text="job"
                  :error="error.job"
                />
              </v-dialog>
            </v-col>
          </v-row>
          <v-divider />
          <v-row style="height: 25% !important;" no-gutters>
            <v-col cols="12" class="align-center align-self-center">
              <info-with-title
                title="آدرس:"
                :value="address"
                :click="addressCodeDialogClick"
                direction="rtl"
              />
              <v-dialog
                v-model="address_dialog"
                persistent
                max-width="400"
              >
                <edit-one-textarea
                  :loading="loading"
                  :click-exit="addressCodeDialogClick"
                  :click-accept="addressClickAccept"
                  title="آدرس"
                  label-text="آدرس"
                  label-button="ثبت اطلاعات"
                  :input-text="address"
                  :error="error.address"
                />
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card height="400px">
          <v-list class="pt-0 pt-0">
            <v-list-item style="background-color: #85b3be;">
              <list-item-order1
                :data="{'index':'ردیف', 'created':'تاریخ ثبت', 'price_como': 'مبلغ کل', 'order_status':'وضعیت','details':'جزئیات'}"
                color="#fff"
              />
            </v-list-item>
            <v-divider />
            <template v-for="(order, index) in orders">
              <v-list-item v-if="index < 3" :key="index" :style="(index % 2) != 1 ? 'background-color: #fbfbfb;' : 'background-color: #fff;'">
                <list-item-order1 :data="order" color="#535353" />
                <v-divider />
              </v-list-item>
            </template>
          </v-list>
          <nuxt-link to="orders" class="text-decoration-none">
            <v-col class="pa-1 d-block justify-center text-center align-self-center black--text">
              مشاهده لسیت سفارش ها
            </v-col>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="mt-4">
      <v-row class="align-self-center">
        <template v-for="(Address,index) in addresses">
          <address-profile :key="index" :address="Address" />
        </template>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import InfoWithTitle from '../../components/objects/infoWithTitle'
import EditTwoTextField from '../../components/forms/editTwoTextField'
import EditOneTextField from '../../components/forms/editOneTextField'
import EditOneTextarea from '../../components/forms/editOneTextarea'
import { EDIT_USER_INFORMATION, GET_ORDER, GET_ORDERS } from '../../store/types/action-types'
import AddressProfile from '../../components/cards/AddressProfile'
import ListItemOrder1 from '~/components/objects/ListItemOrder1'

export default {
  name: 'Profile',
  components: {
    AddressProfile,
    EditOneTextarea,
    EditTwoTextField,
    EditOneTextField,
    InfoWithTitle,
    ListItemOrder1
  },
  data () {
    return {
      name_dialog: null,
      phone_dialog: null,
      email_dialog: null,
      national_code_dialog: null,
      postal_code_dialog: null,
      job_dialog: null,
      address_dialog: null
    }
  },
  computed: {
    addresses () {
      return this.$store.state.user.orders.addresses
    },
    orders () {
      return this.$store.state.user.orders.orders
    },
    first_name () {
      return this.$store.state.user.user.first_name
    },
    last_name () {
      return this.$store.state.user.user.last_name
    },
    email () {
      return this.$store.state.user.user.email
    },
    phone () {
      return this.$store.state.user.user.phone
    },
    national_code () {
      return this.$store.state.user.user.national_code
    },
    postal_code () {
      return this.$store.state.user.user.postal_code
    },
    job () {
      return this.$store.state.user.user.job
    },
    address () {
      return this.$store.state.user.user.address
    },

    loading () {
      return this.$store.state.user.user.loading
    },
    error () {
      return this.$store.state.user.user.error
    }
  },
  mounted () {
    this.$store.dispatch('user/orders/' + GET_ORDERS)
    this.$store.dispatch('user/orders/' + GET_ORDER)
  },
  methods: {
    nameDialogClick () {
      this.name_dialog = !this.name_dialog
    },
    phoneDialogClick () {
      this.phone_dialog = !this.phone_dialog
    },
    emailDialogClick () {
      this.email_dialog = !this.email_dialog
    },
    nationalCodeDialogClick () {
      this.national_code_dialog = !this.national_code_dialog
    },
    postalCodeDialogClick () {
      this.postal_code_dialog = !this.postal_code_dialog
    },
    jobDialogClick () {
      this.job_dialog = !this.job_dialog
    },
    addressCodeDialogClick () {
      this.address_dialog = !this.address_dialog
    },
    async nameClickAccept (firstName, lastName) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        firstName,
        lastName
      })
      if (this.loading === false && !this.error.first_name && !this.error.last_name) {
        this.name_dialog = false
      }
    },
    async phoneClickAccept (phone) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        phone
      })
      if (this.loading === false && !this.error.phone) {
        this.phone_dialog = false
      }
    },
    async emailClickAccept (email) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        email
      })
      if (this.loading === false && !this.error.email) {
        this.email_dialog = false
      }
    },
    async nationalCodeClickAccept (nationalCode) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        nationalCode
      })
      if (this.loading === false && !this.error.national_code) {
        this.national_code_dialog = false
      }
    },
    async postalCodeClickAccept (postalCode) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        postalCode
      })
      if (this.loading === false && !this.error.postal_code) {
        this.postal_code_dialog = false
      }
    },
    async jobClickAccept (job) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        job
      })
      if (this.loading === false && !this.error.job) {
        this.job_dialog = false
      }
    },
    async addressClickAccept (address) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        address
      })
      if (this.loading === false && !this.error.address) {
        this.address_dialog = false
      }
    }
  }
}
</script>

<style scoped>

</style>
