<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="aboutme">
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

      <button @click="counter += 1">+1 Counter</button>
      <button @click="reverseMessage">Reverse Message</button>
    </ul>

    <div class="img-list">
      <div ref="container">
        <img height="200px" width="200px" v-lazy="img" v-for="img in list" :key="img">
      </div>
    </div>
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
        counter: 1,
        list: ['http://hilongjw.github.io/vue-lazyload/dist/test1.jpg', 'http://hilongjw.github.io/vue-lazyload/dist/test2.jpg', 'http://hilongjw.github.io/vue-lazyload/dist/test3.jpg', 'http://hilongjw.github.io/vue-lazyload/dist/test4.jpg', 'http://hilongjw.github.io/vue-lazyload/dist/test5.jpg'
        ]
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
