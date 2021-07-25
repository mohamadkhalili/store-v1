<template>
  <div class="text-center">
    <v-menu
      open-on-hover
      offset-x
      left>
      <template v-slot:activator="{ on, attrs }" class="d-block">
        <v-list-item-title

          plain
          color="primary"
          class="col-12 md-12 text-button pa-6 pr-8 pl-8 ma-0 d-block"
          style="font-family: Vazir !important;width: 100%"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ name }}
        </v-list-item-title>
      </template>
      <v-list

        v-if=" menus && menus[0] && menus[0].url != null ? !isHidden : isHidden"
      >

        <v-list-item
          v-for="(menu, index) in menus"
          :key="index"
          class="lg12 pl-6 pr-6"
          :to="menu.url"
          color="primary"
          link
          v-bind="attrs"
          v-on="on"
        >
          <v-list-item-title

            class="text-button lg12"
            style="font-family: IRANYekan !important;"
            plain
            color="primary"
            dark


          >
            {{ menu.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "DynamicSubMenu",
  data() {
    return {
      selectedItem: null,
      isHidden: false,
      menus: this.dataProp,
      name: this.name,
      attrs: false,
      on: false
    }
  },
  watch: {
    dataProp: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.menus = newV
        console.log(newV)
      }
    },
  },
  props: {
    dataProp: Object,
    name: String,
    attrsParent: Boolean,
    onParent: Boolean
  }
}
</script>

<style scoped>

</style>
