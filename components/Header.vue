<template>
  <v-card>
    <nav>
      <v-toolbar-items class="hidden-sm-and-down">

        <img src="logo.png"
             alt="Vuetify.js"
             class="ma-1"
             height="60px"/>

        <DynamicMenu :data-prop="product_menues" name="محصولات"/>
        <v-divider vertical></v-divider>
        <DynamicMenu :data-prop="product_menues" name="مطالب"/>
        <v-divider vertical></v-divider>
        <StaticMenu title="درباره ما"/>
        <v-divider vertical></v-divider>
        <StaticMenu title="ارتباط با ما"/>
      </v-toolbar-items>
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
    axios.get("http://192.168.114.101:3000/product_root_list/")
      .then(response => {
        console.log(this.product_menues)
        this.product_menues = response.data.product_menues
        this.posts_menues = response.data.posts_menues
        console.log(this.product_menues)
      })
      .catch()
  }
}
</script>

<style scoped>

</style>
