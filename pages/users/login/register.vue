<template>
  <v-container fluid pa-0>
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

</template>

<script>

import axios from "axios";

export default {
  name: "login-register",
  data() {
    return {
      loading: true,
      disabled: true,
      csrfmiddlewaretoken: null,
      csrftoken: null
    }
  },
  mounted() {
    axios.get('http://192.168.114.101:3000/users/login/')
      .then(response => {
        this.csrfmiddlewaretoken = response.data.csrfmiddlewaretoken
        this.csrftoken = response.data.csrftoken
        this.loading = false
        this.disabled = false
      })

  },
  methods: {
    submitPhone() {
      axios.post('http://192.168.114.101:3000/users/login/', {'phone': '09127761266'})
        .then(response => {
          this.csrfmiddlewaretoken = response.data.csrfmiddlewaretoken
          this.csrftoken = response.data.csrftoken
          this.loading = false
          this.disabled = false
        })
    }
  }
}
</script>

<style scoped>

</style>
