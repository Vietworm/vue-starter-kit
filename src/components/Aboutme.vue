<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="Aboutme">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem - Counter: {{ counter }}</h2>

    <h3 v-if="name">{{ name }} - Ecosystem</h3>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <br>
      <br>

      <button v-on:click="counter += 1">+1 Counter</button>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Aboutme',
    props: {
      name: {
        type: String
      }
    },
    data () {
      return {
        msg: 'Aboutme & 100dayproject dream comes true!!',
        counter: 1
      }
    },
    methods: {
      reverseMessage: function () {
        this.msg = this.msg.split('').reverse().join('')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
