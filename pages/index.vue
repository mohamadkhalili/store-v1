<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card class="logo py-4 d-flex justify-center">
        <MySlider/>
      </v-card>
      <v-card>
        <v-card-title class="headline">
          کالاهای پیشنهادی
        </v-card-title>
        <grid-card-product/>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import MySlider from "../components/MySlider";
import GridCardProduct from "../components/GridCardProduct";

export default {
  components: {GridCardProduct, MySlider}
}
</script>
