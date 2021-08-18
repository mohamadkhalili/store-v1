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
import GridCardProduct from "../components/GridCardProduct";
import ListCardPosts from "../components/ListCardPosts";
import GridCardPost from "../components/GridCardPost";

export default {
  components: {GridCardPost, ListCardPosts, GridCardProduct},
  data() {
    return {
      products: null,
      posts: null
    }
  },
  mounted() {
    this.$axios.get("/api/")
      .then(response => {
        console.log(response.data)
        this.products = response.data.products
        this.posts = response.data.posts
      })
      .catch()
  }
}
</script>
