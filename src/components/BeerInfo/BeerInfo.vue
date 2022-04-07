<template>
  <div class="beer-info">
    <div class="beer-info__brand">Brand: {{ brand }}</div>
    <div class="beer-info__name">Name: {{ name }}</div>
    <div class="beer-info__style">Style: {{ beerStyle }}</div>
    <div class="beer-info__hop">Hop: {{ hop }}</div>
    <div class="beer-info__yeast">Yearst: {{ yeast }}</div>
    <div class="beer-info__malts">Malts: {{ malts }}</div>
    <div class="beer-info__ibu">IBU: {{ ibu }}</div>
    <div class="beer-info__alcohol">Alcohol: {{ alcohol }}</div>
    <div class="beer-info__blg">Blg: {{ blg }}</div>
  </div>
</template>

<script>
export default {
  name: 'BeerInfo',

  props: {
    brand: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    beerStyle: {
      type: String,
      default: ''
    },

    hop: {
      type: String,
      default: ''
    },

    yeast: {
      type: String,
      default: ''
    },

    malts: {
      type: String,
      default: ''
    },

    ibu: {
      type: String,
      default: ''
    },

    alcohol: {
      type: String,
      default: ''
    },

    blg: {
      type: String,
      default: ''
    }
  }
};
</script>
