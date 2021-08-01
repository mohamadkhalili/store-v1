<template>
  <v-card>
    <nav>
      <v-toolbar class="hidden-sm-and-down" height="70">


        <router-link to="/">
          <v-img src="/logo.png"
                 alt="Vuetify.js"
                 class="l-1 mt-1 mr-5"
                 height="60px"
                 width="60px"
                 contain
          />
        </router-link>


        <DynamicMenu :data-prop="product_menues" name="محصولات"/>
        <v-divider vertical></v-divider>
        <DynamicMenu :data-prop="posts_menues" name="مطالب"/>
        <v-divider vertical></v-divider>
        <StaticMenu title="درباره ما"/>
        <v-divider vertical></v-divider>
        <StaticMenu title="ارتباط با ما"/>
        <v-spacer></v-spacer>
        <v-btn
          outlined
          color="grey darken-2"
          style="font-family: yekan_o !important;"
          to="/users/login-register/"
        >
          <v-icon>mdi-account</v-icon>
          ورود به حساب

        </v-btn>

        <v-divider
          vertical
          class="mr-2"
        ></v-divider>

        <RouterLink to="/cart/" class="text-decoration-none">
          <v-icon color="grey darken-1" class="ml-4 mr-4">mdi-cart-outline</v-icon>
        </RouterLink>


      </v-toolbar>

    </nav>
  </v-card>
</template>

<script>
import axios from 'axios'
import Menu from "./DynamicMenu";
import StaticMenu from "./StaticMenu";

export default {
  name: "Header",
  components: {StaticMenu, Menu},
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

</style>
