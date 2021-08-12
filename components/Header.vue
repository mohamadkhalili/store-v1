<template>

  <v-toolbar extended height="85" dense class="px-200"
             style="transform: translateY(0px); left: 0px; right: 0px;">


    <nuxt-link class="d-flex align-center text-decoration-none" to="/">
      <v-img max-width="60" src='/logo.png'></v-img>
      <span class="title ml-3 mr-5 hidden-xs-only" style="color: #cb9238">ICTSUN</span>
    </nuxt-link>
    <v-spacer></v-spacer>
    <SearchMain/>
    <v-spacer></v-spacer>
    <v-badge
      bordered
      bottom
      overlap
      color="#cb9238"
      content="10"
    >
      <v-icon>mdi-cart-outline</v-icon>
    </v-badge>

    <v-btn
      color="#cb9238"
      outlined
      class="mx-8"
      to="/users/login/register/"
    >ورود / ثبت نام
      <v-icon>
        mdi-account-circle-outline
      </v-icon>
    </v-btn>
    <v-menu>
      <v-card>

      </v-card>
    </v-menu>
    <template
      v-slot:extension
      class="extension-style"
    >
      <v-tabs color="#cb9238" align-with-title>
        <v-tab>Browsing History</v-tab>
        <v-tab>Todays Deals</v-tab>
        <v-tab>Your Store</v-tab>
        <v-tab>Gift Cards</v-tab>
        <v-tab>Registry</v-tab>
        <v-tab>Sell</v-tab>
      </v-tabs>
    </template>

  </v-toolbar>
</template>

<script>
import axios from 'axios'
import Menu from "./DynamicMenu";
import StaticMenu from "./StaticMenu";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import SearchMain from "./SearchMain";

export default {
  name: "Header",
  components: {SearchMain, HeaderBottom, HeaderTop, StaticMenu, Menu},
  data() {
    return {
      isHidden: false,
      product_menues: undefined,
      posts_menues: null,
      attrs: false,
      on: false
    }
  },
  mounted() {
    axios.get("http://192.168.114.101:3000/products/roots/")
      .then(response => {
        this.product_menues = response.data.product_menues
      })
      .catch()
    axios.get("http://192.168.114.101:3000/posts/roots/")
      .then(response => {
        this.posts_menues = response.data.post_menues
      })
      .catch()
  }
}
</script>

<style>
.px-200 {
  padding-left: 200px;
  padding-right: 200px;
}
</style>
