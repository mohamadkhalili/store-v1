<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card class="logo py-4 d-flex justify-center">
        <MySlider/>
      </v-card>
      <v-card
        v-if=" products && products[0] && products[0].url != null ? !isHidden : isHidden">
        <v-card-title class="headline">
          کالاهای پیشنهادی
        </v-card-title>
        <grid-card-product :products="products"/>
      </v-card>
      <v-card
        v-if=" posts && posts[0] && posts[0].url != null ? !isHidden : isHidden">
        <v-card-title class="headline">
          پست های پیشنهادی
        </v-card-title>
        <GridCardPost :posts="posts"/>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import MySlider from "../components/MySlider";
import GridCardProduct from "../components/GridCardProduct";
import axios from "axios";
import ListCardPosts from "../components/ListCardPosts";
import GridCardPost from "../components/GridCardPost";

export default {
  components: {GridCardPost, ListCardPosts, GridCardProduct, MySlider},
  data() {
    return {
      products: null,
      posts: null
    }
  },
  mounted() {
    axios.get("http://192.168.114.101:3000/")
      .then(response => {
        console.log(response.data)
        this.products = response.data.products
        this.posts = response.data.posts
      })
      .catch()
  }
}
</script>
