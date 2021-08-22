<template>
  <v-row class="pt-8">
    <v-col cols="6">
      <v-card height="400px">
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="نام و نام خانوادگی:" :value="name" :edit="test" direction="rtl"/>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="شماره تلفن همراه:" :value="phone" :edit="test" direction="ltr"/>
          </v-col>

        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="ایمیل:" :value="email" :edit="test" direction="ltr"/>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="کد ملی:" :value="mellicode" :edit="test" direction="ltr"/>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="تاریخ عضویت:" :value="date_joined" :edit="test" direction="ltr"/>
          </v-col>
          <v-divider
            vertical
          ></v-divider>
          <v-col cols="6" class="align-center align-self-center">
            <info-with-title title="تاریخ آخرین ورود:" :value="last_login" :edit="test" direction="ltr"/>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row style="height: 25% !important;" no-gutters>
          <v-col cols="12" class="align-center align-self-center">
            <info-with-title title="آدرس:" :value="address" :edit="test" direction="rtl"/>
          </v-col>

        </v-row>

      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card height="400px">
        <v-row style="height: 50% !important;" no-gutters>
          <v-col cols="6">

          </v-col>
          <v-col cols="6">

          </v-col>
        </v-row>
        <v-row style="height: 50% !important;" no-gutters>
          <v-col cols="6">

          </v-col>
          <v-col cols="6">

          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import InfoWithTitle from "../../components/objects/infoWithTitle";

export default {
  name: "profile",
  components: {InfoWithTitle},
  methods: {
    test() {
      console.log("giufufu")
    }
  },
  computed: {
    name() {
      return this.$store.state.user.user.first_name + ' ' + this.$store.state.user.user.last_name
    },
    email() {
      return this.$store.state.user.user.email
    },
    phone() {
      return this.$store.state.user.user.phone_show
    },
    mellicode() {
      return this.$store.state.user.user.phone_show
    },
    date_joined() {
      return this.$store.state.user.user.date_joined
    },
    last_login() {
      return this.$store.state.user.user.last_login
    },
    address() {
      return this.$store.state.user.user.address
    }
  }
}
</script>

<style scoped>

</style>
