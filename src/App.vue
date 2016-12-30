<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/profile/vietworm">Profile</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
