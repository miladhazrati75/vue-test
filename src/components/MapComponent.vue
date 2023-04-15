<template>
  <div class="h-screen md:h-[600px] w-full z-0" id="map"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted } from 'vue'
import { store } from '../store'
onMounted(() => {
  const center = [35.42486791930558, 51.59179687500001]
  const current_zoom = 8
  store.setLatLng(center)
  let map = L.map('map', {
    center: center,
    zoom: current_zoom
  })
  let marker = L.marker(center, { draggable: true }).addTo(map)
  marker.on('dragend', function (e) {
    const latlng = [marker.getLatLng().lat, marker.getLatLng().lng]
    store.setLatLng(latlng)
  })
  map.once('click', function (e) {
    const latlng = [e.latlng.lat, e.latlng.lng]
    marker.setLatLng(latlng)
    store.setLatLng(latlng)
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
})
</script>

<style></style>
