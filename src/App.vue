<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  color: #2c3e50;
  background-color: #f6bc7f;

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
