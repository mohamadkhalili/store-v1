<template>
  <v-toolbar
    extended
    height="85"
    dense
    class="px-2"
    max-height="133"
    style="transform: translateY(0px); left: 0px; right: 0px;"
  >
    <nuxt-link class="d-flex align-center text-decoration-none" to="/">
      <v-img max-width="60" src="/logo.png" />
      <span class="title ml-3 mr-5 hidden-xs-only" style="color: #cb9238">ICTSUN</span>
    </nuxt-link>
    <v-spacer />
    <SearchMain />
    <v-spacer />

    <template v-if="user.id">
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="primary"
            class="mx-8"
            plain
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="30" color="rgba(0, 0, 0, 0.87)">
              mdi-account-circle-outline
            </v-icon>
            <v-icon>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/users/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>حساب کاربری</v-list-item-title>
          </v-list-item>
          <v-list-item to="/users/orders">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>سفارش های من</v-list-item-title>
          </v-list-item>
          <v-list-item to="/users/logout">
            <v-list-item-icon>
              <v-icon color="red">
                mdi-exit-to-app
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>خروج</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-else>
      <v-btn
        color="primary"
        outlined
        class="mx-8"
        to="/users/login/register/"
      >
        ورود / ثبت نام
        <v-icon>
          mdi-account-circle-outline
        </v-icon>
      </v-btn>
    </template>

    <v-menu
      offset-y
      open-on-hover
      z-index="10"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="pa-0"
          plain
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            bordered
            overlap
            color="secondary"
            :content="count"
          >
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list v-if="count_number>0">
        <v-list-item
          v-for="(product,index) in products"
          :key="index"
          style="z-index: 10"
        >
          <v-col>
            <v-row>
              <nuxt-link :to="product.url" class="text-decoration-none text--black">
                <v-list-item-title style="width: 250px" class="text--black black--text">
                  {{
                    product.name
                  }}
                </v-list-item-title>
              </nuxt-link>
            </v-row>
            <v-row class="pa-2" style="width: 100%">
              <v-spacer />
              <v-list-item-subtitle>
                {{ product.quantity }}
                <v-icon size="12">
                  mdi-close
                </v-icon>
                {{ product.price }}تومان
              </v-list-item-subtitle>
            </v-row>
          </v-col>
          <v-spacer />
          <v-list-item-action style="z-index: 10">
            <v-badge
              bordered
              overlap
              color="#ef394e"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon slot="badge" style="z-index: 50" @click="removeCart(product.id)">
                mdi-close
              </v-icon>
              <nuxt-link :to="product.url" class="text-decoration-none text--black">
                <v-img :src="product.image_icon.image" width="80px" height="80px" contain />
              </nuxt-link>
            </v-badge>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="mb-2">
          <v-list-item-title>
            جمع کل: {{ total_prices }} تومان
          </v-list-item-title>
          <v-spacer />
          <btn-small to="/cart">
            ثبت سفارش
          </btn-small>
        </v-list-item>
      </v-list>
    </v-menu>

    <template
      #extension
      class="extension-style"
    >
      <v-row>
        <v-col>
          <v-tabs color="primary" align-with-title>
            <template v-for="(menu, index) in menus" :id="index">
              <template v-if="menu.root_childs && menu.root_childs[0]">
                <v-menu
                  :key="index"
                  open-on-hover
                  offset-y
                  left
                >
                  <template #activator="{ on, attrs }">
                    <v-tab
                      :to="menu.url"
                      style="z-index: 2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ menu.name }}
                    </v-tab>
                  </template>
                  <MenuChild :menuchilds="menu.root_childs" />
                </v-menu>
              </template>
              <template v-else>
                <v-tab :key="index" :to="menu.url">
                  {{ menu.name }}
                </v-tab>
              </template>
            </template>
          </v-tabs>
        </v-col>

        <toggle-light-dark
          v-model="$vuetify.theme.dark"
          class="align-self-center ml-4"
        />
      </v-row>
    </template>
  </v-toolbar>
</template>

<script>
import { DELETE_CARD, GET_CARD, GET_MENU } from '../store/types/action-types'
import SearchMain from './SearchMain'
import MenuChild from './MenuChild'
import BtnSmall from './buttons/btnSmall'
import ToggleLightDark from './buttons/ToggleLightDark'

export default {
  name: 'Header',
  components: { ToggleLightDark, BtnSmall, MenuChild, SearchMain },
  data () {
    return {
      cart_list: null,
      lockSelection: false,
      isHidden: false,
      attrs: false,
      on: false
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    },
    menus () {
      return this.$store.state.menu.menus
    },
    products () {
      return this.$store.state.cart.products
    },
    count () {
      return this.$store.state.cart.count
    },
    count_number () {
      return this.$store.state.cart.count_number
    },
    total_prices () {
      return this.$store.state.cart.total_prices
    },
    getpersiannumber (number) {
      return this.$tocomonum(number)
    }
  },
  watch: {
    cart_list: {
      immediate: true,
      deep: true,
      handler (newV, oldV) {
        this.cart_list = null
      }
    }
  },
  mounted () {
    this.getmenus()
    this.getcards()
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('cart/' + DELETE_CARD, id)
    },
    getmenus () {
      this.$store.dispatch('menu/' + [GET_MENU])
    },
    async getcards () {
      await this.$store.dispatch('cart/' + [GET_CARD])
    }
  }
}
</script>

<style>
@media (max-width: 19200px) {
  .px-200 {
    padding-left: 200px;
    padding-right: 200px;
  }
}

@media (max-width: 19200px) {
  .px-200 {
    padding-left: 200px;
    padding-right: 200px;
  }
}

</style>
