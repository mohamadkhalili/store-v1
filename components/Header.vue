<template>
  <v-card>
    <nav>
      <v-list-item>
        <DynamicMenu :data-prop="product_menues" name="محصولات"/>
        <DynamicMenu :data-prop="posts_menues" name="مطالب"/>
        <StaticMenu title="درباره ما"/>
      </v-list-item>
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
