<template>
  <div class="text-center">
    <v-menu
      open-on-hover
      offset-x
      left>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
          class="lg12 pl-6 pr-6"
          color="primary"
          link
          v-bind="attrs"
          v-on="on"
        >
          <v-list-item-title

            plain
            color="primary"
            class="text-button pl-0 pr-0 ma-0"
            style="font-family: Vazir !important;"
            dark


          >
            {{ name }}
          </v-list-item-title>
        </v-list-item>
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
        >
          <v-list-item-title

            class="text-button lg12"
            style="font-family: IRANYekan !important;"
            plain
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"

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
