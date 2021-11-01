<template>
  <v-container fluid pa-0 sele>
    <v-row
      align="center"
      justify="center"
      style="min-height:calc(100vh - 150px);"
      dense
    >
      <v-col cols="12" class="fill-height d-flex flex-column justify-center align-center">
        <v-card
          elevation="2"
          outlined
          width="400px"
          :loading="loading"
          :disabled="disabled"
        >
          <div
            class=" ma-auto mt-3"
            style="max-width: 100px"
          >
            <router-link
              to="/"
            >
              <v-img
                src="/logo.png"
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
            شماره تلفن همراه و رمز عبور خود را وارد کنید
          </v-card-subtitle>
          <v-text-field
            v-model="phonenumber"
            label="شماره همراه"
            class="ma-4"
            outlined
            clearable
            hide-details
            @keypress.enter="chagePass"
          />
          <v-text-field
            ref="passelement"
            v-model="password"
            :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showpass ? 'text' : 'password'"
            label="رمز عبور"
            class="ma-4"
            outlined
            hide-details
            clearable
            @keypress.enter="submitPhone"
            @click:append="showpass = !showpass"
          />
          <v-card-subtitle class="mt-1">
            {{ errorPhonePass ? 'شماره تلفن و ر مز عبور اشنباه می باشد.' : '' }}
          </v-card-subtitle>
          <div class="ma-4">
            <v-btn
              block
              color="secondary"
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
</template>

<script>
import { SIGNIN } from '../../../store/types/action-types'
// eslint-disable-next-line no-unused-vars
import redirectLogedIn from '../../../middleware/redirectLogedIn'
import { SET_ERROR_PHONE_PASS } from '../../../store/types/mutation-types'

export default {
  name: 'LoginRegister',
  middleware: ['redirectLogedIn'],
  data () {
    return {
      loading: false,
      disabled: false,
      csrfmiddlewaretoken: null,
      csrftoken: null,
      phonenumber: null,
      password: null,
      showpass: false
    }
  },
  computed: {
    status_register () {
      return this.$store.state.user.user.status_register
    },
    errorPhonePass () {
      return this.$store.state.user.user.errorPhonePass
    }
  },
  beforeCreate () {
    if (this.$store.state.user.user.id != null) {
      this.$router.push('/')
    }
  },
  mounted () {
    this.$store.commit('user/user/' + SET_ERROR_PHONE_PASS, false)
  },
  methods: {
    chagePass () {
      this.$refs.passelement.focus()
    },
    async submitPhone (event) {
      event.preventDefault()
      this.loading = true
      await this.$store.dispatch('user/user/' + SIGNIN, { phone: this.phonenumber, password: this.password })
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
