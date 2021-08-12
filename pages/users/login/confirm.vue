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
              رمز عبور را وارد کنید
            </v-card-title>
            <v-card-subtitle class="mt-1">
              رمز عبور حساب کاربری {{ phonenumber }} را وارد کنید
            </v-card-subtitle>
            <v-text-field
              v-model="password"
              :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showpass ? 'text' : 'password'"
              label="رمز عبور"
              class="ma-4"
              outlined
              clearable
              @click:append="showpass = !showpass"
            ></v-text-field>
            <div class="ma-4">
              <v-btn
                block
                color="red darken-1"
                elevation="2"
                x-large
                class="white--text text-h6"
                @click="submitlogin"
              >
                ادامه
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {SIGNIN} from "../../../store/types/action-types";

export default {
  name: "confirm",
  middleware: 'authenticated',
  data() {
    return {
      showpass: false,
      loading: false,
      password: null
    }
  },
  computed: {
    phonenumber() {
      return this.$store.state.user.user.phone
    }
  },
  methods: {
    submitlogin() {
      this.$store.dispatch('user/user/' + SIGNIN, this.password)
    }
  }
}
</script>

<style scoped>

</style>
