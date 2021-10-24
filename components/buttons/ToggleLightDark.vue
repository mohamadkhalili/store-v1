<template>
  <div @click="switchLight" class="accent" style="width: 60px;height: 30px;border-radius: 60px 60px 60px 60px;">
    <v-row class="align-self-center" style="margin: 0;padding: 0;">

      <template v-if="night">
        <v-icon large style="width: 30px;height: 31px" color="yellow">
          mdi-moon-full
        </v-icon>

        <v-icon style="width: 30px;height: 30px" color="yellow">
          mdi-weather-night
        </v-icon>
      </template>
      <template v-else>

        <v-icon style="width: 30px;height: 30px" color="yellow">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon large style="width: 30px;height: 31px" color="yellow">
          mdi-moon-full
        </v-icon>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ToggleLightDark",
  props: ["value"],
  data() {
    return {
      night: this.value,
    }
  },
  methods: {
    switchLight(e) {
      this.night = !this.night
      this.$emit('input', this.night)
    }
  }
}
</script>

<style scoped>

</style>
