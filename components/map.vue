<template>
  <div id="my-map" style="height: 800px" />
</template>

<script>
import maplibregl from 'maplibre-gl'

export default {
  name: 'Map',
  data () {
    return {
      API_KEY: '0a93a6162ea74d65abde42bd434dcc62',
      lng: null,
      lat: null
    }
  },
  async mounted () {
    await this.$axios.get('https://api.geoapify.com/v1/ipinfo?apiKey=0a93a6162ea74d65abde42bd434dcc62').then((req) => {
      this.lat = req.data.location.latitude
      this.lng = req.data.location.longitude
    })
    const v1 = new maplibregl.LngLat(this.lng, this.lat)
    const map = new maplibregl.Map({
      container: 'my-map',
      style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?&ip=${this.ip}&apiKey=${this.API_KEY}`,
      zoom: 8,
      center: v1
    })

    map.on('click', this.onMapClick)
  },
  methods: {
    onMapClick (e) {
      const reverseGeocodingUrl = `https://api.geoapify.com/v2/place-details?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&apiKey=${this.API_KEY}`

      // call Reverse Geocoding API - https://www.geoapify.com/reverse-geocoding-api/
      this.$axios.get(reverseGeocodingUrl).then((result) => {
      })
    }
  }
}
</script>

<style>
#my_iframe .mapboxgl-ctrl {
  opacity: 0 !important;
}

.mapboxgl-ctrl * {
  opacity: 0 !important;
}
</style>
