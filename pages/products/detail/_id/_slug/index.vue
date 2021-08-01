<template>

  <v-card class="mt-4 pa-5">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card flat class="logo py-4 d-flex justify-center">
          <v-list-item
            v-for="(root, index) in roots"
            :key="index"
            rounded
            style="flex: none;padding: 0 4px;"
          >
            <v-list-item :to="root.url" style="flex: none;padding: 0 4px;"> {{ root.name }}</v-list-item>
            <v-list-item :key="index" v-if="index !== roots.length-1 ? !isHidden : isHidden"
                         style="width: 5px;flex: none;padding: 0 4px;">/
            </v-list-item>


          </v-list-item>
          <v-spacer></v-spacer>

        </v-card>
        <v-row>
          <v-col flat width="450" cols="4">
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="image in images"
                :key="image.id"
              >
                <v-card flat>
                  <v-card-text>
                    <v-img width="450" height="450" contain :src="image.father.image"></v-img>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

            <v-tabs
              v-model="tab"
              show-arrows
            >
              <v-tab
                v-for="image in images"
                :key="image.id"
              >
                <v-img width="60" height="60" contain :src="image.image"></v-img>
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col flat cols="8">
            <v-row class="mb-12 mt-12">
              <v-col class="col-auto">
                <h2>
                  {{ data ? data.title : '' }}
                </h2>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="col-auto mr-auto ma-auto">
                <v-row
                  align="center"
                  class="mx-0"
                >

                  <v-rating
                    :value="data ? data.rating : 0"
                    color="amber"
                    background-color="grey lighten-1"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ms-4">
                    {{ data ? data.rating : '۰' }}
                  </div>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="mt-12  mb-12">
              <v-col class="col-auto ma-auto">
                <p justify-right style="line-height: 1.8">
                  {{ data ? data.brief_description : '' }}
                </p>
              </v-col>
            </v-row>
            <v-row class="mt-12">
            </v-row>
            <v-row class="mt-12">
              <v-col class="col-auto ma-auto">
                <h3>
                  {{ price_persian }} تومان
                </h3>

              </v-col>
              <v-col class="col-auto ma-auto">
                <v-chip class="black--text ms-4 ma-auto"
                        :color=" data && data.available ? available_color : null">
                  {{ data && data.available ? "موجود" : "ناموجود" }}
                </v-chip>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="col-auto ma-auto">
                <v-btn
                  class="white--text btn_main_product"
                  color="red darken-1"
                  x-large
                  :disabled="data && data.available ? false : true"
                >
                  افزودن به سبد خرید
                </v-btn>

              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <p class="ma-12" style="line-height: 1.8" v-html="detailed_description">
          </p>

        </v-row>
        <v-row>
          <CardProductRelatedLList :products=" data? data.related_products : ''"/>
        </v-row>
      </v-col>
    </v-row>
  </v-card>

</template>

<script>
import axios from "axios";
import CardProductRelatedLList from "../../../../../components/CardProductRelatedLList";

export default {
  name: "index",
  components: {CardProductRelatedLList},
  data() {
    return {
      read_description: false,
      tab: null,
      id: this.$route.params.id,
      slug: this.$route.params.slug,
      roots: null,
      images: null,
      price_persian: "",
      available_color: "green accent-2",
      data: null,
      detailed_description: null
    }
  },
  mounted() {
    axios.get("http://192.168.114.101:3000/products/detail/" + this.id + "/" + this.slug + "/")
      .then(response => {
        this.roots = response.data.roots
        this.data = response.data
        this.images = response.data.smallimages
        this.price_persian = this.getPersianNumbers(this.data.price)
        console.log(this.data.detailed_description)
        this.detailed_description = this.data.detailed_description.replace(/(\\r)*\n/g, '<br>')
        console.log(this.detailed_description)
      })
      .catch()
  },
  methods: {
    getPersianNumbers(price_number) {
      var out = ""
      const price_l = price_number.length
      for (let i = 0; i < price_l; i++) {
        let lastnumber = price_number % 10;
        price_number = parseInt(price_number / 10)
        if (i % 3 == 0 && i < price_l - 1 && i > 1) {
          out = "," + out
        }
        if (lastnumber == 0) {
          out = "۰" + out
        } else if (lastnumber == 1) {
          out = "۱" + out
        } else if (lastnumber == 2) {
          out = "۲" + out
        } else if (lastnumber == 3) {
          out = "۳" + out
        } else if (lastnumber == 4) {
          out = "۴" + out
        } else if (lastnumber == 5) {
          out = "۵" + out
        } else if (lastnumber == 6) {
          out = "۶" + out
        } else if (lastnumber == 7) {
          out = "۷" + out
        } else if (lastnumber == 8) {
          out = "۸" + out
        } else if (lastnumber == 9) {
          out = "۹" + out
        }

      }
      return out
    }
  }
}
</script>

<style scoped>

</style>
