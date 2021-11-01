<template>
  <v-row style="height: 110px" class="pa-1">
    <v-col cols="2" class="text-center align-self-center" :style="'color: '+color">
      {{ data.index }}
    </v-col>
    <v-divider
      vertical
      inset
    />
    <v-col cols="3" class="text-center align-self-center" :style="'color: '+color">
      {{ data.created }}
    </v-col>
    <v-divider
      vertical
      inset
    />
    <v-col cols="3" class="text-center align-self-center" :style="'color: '+color">
      {{ data.price_como }}
      <template v-if="!data.details">
        تومان
      </template>
    </v-col>
    <v-divider
      vertical
      inset
    />
    <v-col cols="2" class="text-center align-self-center" :style="'color: '+color">
      {{ data.order_status }}
    </v-col>
    <v-divider
      vertical
      inset
    />
    <v-col cols="2" class="text-center align-self-center" :style="'color: '+color">
      <template v-if="data.details">
        {{ data.details }}
      </template>
      <template v-else>
        <nuxt-link
          style="display:grid;height: 100% !important;"
          class="text-decoration-none"
          :to="'/users/orders/'+data.id"
        >
          <v-icon :style="'color: '+color">
            mdi-dots-horizontal
          </v-icon>
        </nuxt-link>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListItemOrder1',
  props: {
    data: {
      default: null,
      type: Object
    },
    color: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
