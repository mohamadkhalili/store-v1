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
import {mapActions} from 'vuex'

export default {
  name: "login-register",
  data() {
    return {
      loading: false,
      disabled: false,
      csrfmiddlewaretoken: null,
      csrftoken: null,
      phonenumber: null
    }
  },
  mounted() {

    this.loading = true
    this.disabled = true
    // this.$axios.$get('URL', {progress: false})
    this.$axios.$get('api/users/login/')
      .then(response => {
        console.log(response)
        this.csrfmiddlewaretoken = response.csrfmiddlewaretoken
        console.log(response.csrfmiddlewaretoken)
        document.cookie = "csrftoken=" + response.csrftoken + ";path=/"
      })
    this.loading = false
    this.disabled = false
  },
  methods: {
    ...mapActions('user/user', ['checkPhone']),
    ...mapActions('user/auth', ['GET_CSF']),
    submitPhone() {
      this.loading = true
      this.disabled = true

      this.checkPhone()
      // this.GET_CSF()

      // this.$axios.$post('/api/users/login/', {
      //   'phone': this.phonenumber,
      //   'csrfmiddlewaretoken': this.csrfmiddlewaretoken
      // })
      //   .then(response => {
      //     console.log(response)
      //   })
      this.loading = false
      this.disabled = false
      // var xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://192.168.114.101:3000/users/login/', true);
      // xhr.withCredentials = true;
      // xhr.send(null);
    }
  }
}
</script>

<style scoped>

</style>
