<template>
  <v-row class="pt-8">
    <v-col cols="6">
      <v-card height="400px">
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="name_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="نام و نام خانوادگی:" :value="first_name + ' ' + last_name"
                                 :click="nameDialogClick" direction="rtl"/>
              </template>
              <edit-two-text-field :loading="loading" :click-exit="nameDialogClick" :click-accept="nameClickAccept"
                                   title="نام و نام خانوادگی"
                                   label-text1="نام" label-text2="نام خانوادگی" label-button="ثبت اطلاعات"
                                   :input-text1="first_name" :input-text2="last_name" :error1="error.first_name"
                                   :error2="error.last_name"/>
            </v-dialog>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="phone_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="شماره تلفن همراه:" :value="phone_view" :click="phoneDialogClick"
                                 direction="rtl"/>
              </template>
              <edit-one-text-field :loading="loading" :click-exit="phoneDialogClick" :click-accept="phoneClickAccept"
                                   title="شماره تلفن همراه"
                                   label-text="شماره همراه" label-button="ثبت اطلاعات" :input-text="phone"
                                   :error="error.phone"/>
            </v-dialog>
          </v-col>

        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="email_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="ایمیل:" :value="email" :click="emailDialogClick" direction="rtl"/>
              </template>
              <edit-one-text-field :loading="loading" :click-exit="emailDialogClick" :click-accept="emailClickAccept"
                                   title="ایمیل"
                                   label-text="ایمیل" label-button="ثبت اطلاعات" :input-text="email"
                                   :error="error.email"/>
            </v-dialog>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="national_code_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="کد ملی:" :value="national_code_view" :click="nationalCodeDialogClick"
                                 direction="rtl"/>
              </template>
              <edit-one-text-field :loading="loading" :click-exit="nationalCodeDialogClick"
                                   :click-accept="nationalCodeClickAccept"
                                   title="کد ملی"
                                   label-text="کد ملی" label-button="ثبت اطلاعات" :input-text="national_code"
                                   :error="error.national_code"/>
            </v-dialog>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="postal_code_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="کد پستی:" :value="postal_code_view" :click="postalCodeDialogClick"
                                 direction="rtl"/>
              </template>
              <edit-one-text-field :loading="loading" :click-exit="postalCodeDialogClick"
                                   :click-accept="postalCodeClickAccept"
                                   title="کد پستی"
                                   label-text="کد پستی" label-button="ثبت اطلاعات" :input-text="postal_code"
                                   :error="error.postal_code"/>
            </v-dialog>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <v-dialog
              v-model="job_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="شغل:" :value="job" :click="jobDialogClick"
                                 direction="rtl"/>
              </template>
              <edit-one-text-field :loading="loading" :click-exit="jobDialogClick" :click-accept="jobClickAccept"
                                   title="شغل"
                                   label-text="شغل" label-button="ثبت اطلاعات" :input-text="job" :error="error.job"/>
            </v-dialog>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="12" class="align-center align-self-center">
            <v-dialog
              v-model="address_dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <info-with-title title="آدرس:" :value="address_view" :click="addressCodeDialogClick"
                                 direction="rtl"/>
              </template>
              <edit-one-textarea :loading="loading" :click-exit="addressCodeDialogClick"
                                 :click-accept="addressClickAccept"
                                 title="آدرس"
                                 label-text="آدرس" label-button="ثبت اطلاعات" :input-text="address"
                                 :error="error.address"/>
            </v-dialog>
          </v-col>

        </v-row>

      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card height="400px">
        <v-list>
          <v-divider></v-divider>
          <v-list-item>
            <list-item-order1
              :data="{'id_persian':'ردیف', 'created_persian':'تاریخ ثبت', 'price_persian': 'مبلغ کل', 'paid_type':'وضعیت','details':'جزئیات'}"></list-item-order1>

          </v-list-item>
          <v-divider></v-divider>
          <template v-for="(order, index) in orders" v-if="index < 3">
            <v-list-item>
              <list-item-order1 :data="order"></list-item-order1>

            </v-list-item>
            <v-divider></v-divider>
          </template>

        </v-list>
        <nuxt-link to="to" class="text-decoration-none">
          <v-col class="pa-1 d-block justify-center text-center align-self-center black--text">مشاهده لسیت سفارش ها
          </v-col>
        </nuxt-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import InfoWithTitle from "../../components/objects/infoWithTitle";
import EditTwoTextField from "../../components/forms/editTwoTextField";
import EditOneTextField from "../../components/forms/editOneTextField";
import EditOneTextarea from "../../components/forms/editOneTextarea";
import {EDIT_USER_INFORMATION, GET_ORDERS} from "../../store/types/action-types";
import ListItemOrder1 from "~/components/objects/ListItemOrder1";

export default {
  name: "profile",
  components: {
    EditOneTextarea,
    EditTwoTextField,
    EditOneTextField,
    InfoWithTitle,
    ListItemOrder1
  },
  data() {
    return {
      name_dialog: null,
      phone_dialog: null,
      email_dialog: null,
      national_code_dialog: null,
      postal_code_dialog: null,
      job_dialog: null,
      address_dialog: null,
    }
  },
  methods: {
    nameDialogClick() {
      this.name_dialog = !this.name_dialog
    },
    phoneDialogClick() {
      this.phone_dialog = !this.phone_dialog
    },
    emailDialogClick() {
      this.email_dialog = !this.email_dialog
    },
    nationalCodeDialogClick() {
      this.national_code_dialog = !this.national_code_dialog
    },
    postalCodeDialogClick() {
      this.postal_code_dialog = !this.postal_code_dialog
    },
    jobDialogClick() {
      this.job_dialog = !this.job_dialog
    },
    addressCodeDialogClick() {
      this.address_dialog = !this.address_dialog
    },
    async nameClickAccept(first_name, last_name) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'first_name': first_name,
        'last_name': last_name
      })
      if (this.loading == false && !this.error.first_name && !this.error.last_name) {
        this.name_dialog = false
      }
    },
    async phoneClickAccept(phone) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'phone': phone
      })
      console.log('errrrr: ', this.error.phone)
      if (this.loading == false && !this.error.phone) {
        this.phone_dialog = false
      }
    },
    async emailClickAccept(email) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'email': email
      })
      if (this.loading == false && !this.error.email) {
        this.email_dialog = false
      }
    },
    async nationalCodeClickAccept(national_code) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'national_code': national_code
      })
      if (this.loading == false && !this.error.national_code) {
        this.national_code_dialog = false
      }
    },
    async postalCodeClickAccept(postal_code) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'postal_code': postal_code
      })
      if (this.loading == false && !this.error.postal_code) {
        this.postal_code_dialog = false
      }
    },
    async jobClickAccept(job) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'job': job
      })
      if (this.loading == false && !this.error.job) {
        this.job_dialog = false
      }
    },
    async addressClickAccept(address) {
      await this.$store.dispatch('user/user/' + EDIT_USER_INFORMATION, {
        'address': address
      })
      if (this.loading == false && !this.error.address) {
        this.address_dialog = false
      }
    }
  },
  computed: {
    orders() {
      return this.$store.state.user.orders.orders
    },
    first_name() {
      return this.$store.state.user.user.first_name
    },
    last_name() {
      return this.$store.state.user.user.last_name
    },
    email() {
      return this.$store.state.user.user.email
    },
    phone() {
      return this.$store.state.user.user.phone
    },
    phone_view() {
      return this.$store.state.user.user.phone_view
    },
    national_code() {
      return this.$store.state.user.user.national_code
    },
    national_code_view() {
      return this.$store.state.user.user.national_code_view
    },
    postal_code() {
      return this.$store.state.user.user.postal_code
    },
    postal_code_view() {
      return this.$store.state.user.user.postal_code_view
    },
    job() {
      return this.$store.state.user.user.job
    },
    address() {
      return this.$store.state.user.user.address
    },
    address_view() {
      return this.$store.state.user.user.address_view
    },
    loading() {
      return this.$store.state.user.user.loading
    },
    error() {
      return this.$store.state.user.user.error

    }
  },
  mounted() {
    this.$store.dispatch('user/orders/' + GET_ORDERS)
    console.log(this.orders)
  }
}
</script>

<style scoped>

</style>
