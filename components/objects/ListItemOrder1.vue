<template>
  <v-row style="height: 110px" class="pa-1">
    <v-col cols="2" class="text-center align-self-center">
      {{ data.id_persian }}
    </v-col>
    <v-divider
      vertical
      inset
    ></v-divider>
    <v-col cols="3" class="text-center align-self-center">
      {{ data.created_persian }}
    </v-col>
    <v-divider
      vertical
      inset
    ></v-divider>
    <v-col cols="3" class="text-center align-self-center">
      {{ data.price_persian }}
      <template v-if="!data.details">تومان</template>
    </v-col>
    <v-divider
      vertical
      inset
    ></v-divider>
    <v-col cols="2" class="text-center align-self-center">
      {{ data.paid_type }}
    </v-col>
    <v-divider
      vertical
      inset
    ></v-divider>

    <template v-if="data.details">
      <v-col cols="2" class="text-center align-self-center">
        {{ data.details }}
      </v-col>
    </template>
    <template v-else>
      <v-col cols="2" style="height: 100%"
             class="ma-auto pa-0 justify-center text-xs-center align-self-center align-center">
        <nuxt-link style="display:grid;height: 100% !important;" class="text-decoration-none"
                   :to="data.profile_order ? data.profile_order.url : null">
          <v-icon>mdi-dots-horizontal</v-icon>
        </nuxt-link>
      </v-col>
    </template>

  </v-row>
</template>

<script>
export default {
  name: "ListItemOrder1",
  props: ['data']
}
</script>

<style scoped>

</style>
