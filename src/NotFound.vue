<template>
  <div class="notFound">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'notFound',
    data () {
      return {
        msg: '404 :( Page Not Found!!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
