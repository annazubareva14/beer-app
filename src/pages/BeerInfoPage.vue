<template>
  <div class="beer-info-page">
    <span class="beer-info-page__title"> My choice:</span>
    <beer-info
      :brand="getBeerInfo.brand"
      :name="getBeerInfo.name"
      :beer-style="getBeerInfo.style"
      :hop="getBeerInfo.hop"
      :yeast="getBeerInfo.yeast"
      :malts="getBeerInfo.malts"
      :ibu="getBeerInfo.ibu"
      :alcohol="getBeerInfo.alcohol"
      :blg="getBeerInfo.blg"
    />
    <router-link to="/" class="beer-info-page__btn"> back </router-link>
  </div>
</template>

<script>
import BeerInfo from '../components/BeerInfo/BeerInfo.vue';

export default {
  name: 'BeerInfoPage',

  components: { BeerInfo },

  data() {
    return {
      beerInfo: null,
      errorMessage: null
    };
  },

  computed: {
    getBeerInfo() {
      return this.beerInfo || {};
    }
  },

  async mounted() {
    try {
      const response = await fetch(
        'https://random-data-api.com/api/beer/random_beer '
      );
      const data = await response.json();

      if (data) {
        this.beerInfo = data;
      }
    } catch (error) {
      this.errorMessage = error;
      console.error('There was an error!', error);
    }
  }
};
</script>

<style lang="scss" scoped>
.beer-info-page {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  &__title {
    font-weight: bold;
  }

  &__btn {
    padding: 10px 15px;
    max-width: 170px;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    color: #106b68;
    border-radius: 7px;
    border: 3px #106b68 solid;
    background-color: #86b29f;
  }
}
</style>
