<template>
  <v-form>
    <v-container fluid pa-0 sele>
      <v-row align="center" justify="center"
             style="height:100vh" dense>
        <v-col cols="12" class="fill-height d-flex flex-column justify-center align-center">

          <v-card
            elevation="2"
            outlined
            width="400px"
            :loading="loading"
            :disabled="disabled"
          >
            <div class=" ma-auto mt-3"
                 style="max-width: 100px">
              <router-link to="/"
              >
                <v-img src="/logo.png"
                       alt="Vuetify.js"
                       class="l-1"
                       height="100"
                       width="100"
                       contain
                />
              </router-link>
            </div>
            <v-card-title class="mt-1">
              ورود / ثبت نام
            </v-card-title>
            <v-card-subtitle class="mt-1">
              شماره تلفن همراه خود را وارد کنید
            </v-card-subtitle>
            <v-text-field
              v-model="phonenumber"
              label="شماره همراه"
              class="ma-4"
              outlined
              clearable
              :error="phoneerror"
              @keypress.enter="submitPhone"
            ></v-text-field>
            <div class="ma-4">
              <v-btn
                block
                color="red darken-1"
                elevation="2"
                x-large
                class="white--text text-h6"
                @click="submitPhone"
              >
                ورود به سایت
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {CHECK_PHONE} from "../../../store/types/action-types";
import redirectLogedIn from "../../../middleware/redirectLogedIn";
import {SET_PHONE} from "@/store/types/mutation-types";

export default {
  name: "login-register",
  middleware: ['redirectLogedIn'],
  data() {
    return {
      phoneerror: false,
      loading: false,
      disabled: false,
      csrfmiddlewaretoken: null,
      csrftoken: null,
      phonenumber: null
    }
  },
  beforeCreate() {
    if (this.$store.state.user.user.id != null) {
      this.$router.push('/')
    }
  },
  computed: {
    status_register() {
      return this.$store.state.user.user.status_register
    }
    ,
    id_user() {
      return this.$store.state.user.user.id
    }
  }
  ,
  methods: {
    async submitPhone(event) {
      event.preventDefault()

      if (this.phonenumber.length == 11) {
        this.phoneerror = false
        this.loading = true
        await this.$store.dispatch('user/user/' + CHECK_PHONE, this.phonenumber)
        this.loading = false
        if (this.status_register) {
          console.log(this.phonenumber)
          this.$store.commit('user/user/' + SET_PHONE, this.phonenumber)
          this.$router.push('/users/login/confirm')
        }
      } else {
        this.phoneerror = true
      }

    }
  }
}
</script>

<style scoped>

</style>
