<template>
  <v-menu
    open-on-hover
    offset-y
    v-if=" menus && menus[0] && menus[0].url != null ? !isHidden : isHidden">
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
          class="text-button"
          style="font-family: Vazir !important;"
          dark


        >
          {{ name }}
        </v-list-item-title>
      </v-list-item>
    </template>
    <v-list

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
</template>

<script>
export default {
  name: "DynamicMenu",
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
    name: String
  }
}
</script>

<style scoped>

</style>
