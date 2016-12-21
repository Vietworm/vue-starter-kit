<template>
  <div id="app">
    <img src="./assets/logo.png">
    <aboutme></aboutme>
  </div>
</template>

<script>
import Aboutme from './components/Aboutme'

export default {
  name: 'app',
  components: {
    Aboutme
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
