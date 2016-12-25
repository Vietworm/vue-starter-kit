<template>
  <div>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price }}
        <br>
        <button :disabled="!p.inventory" @click="addToCart(p)">Add to Cart</button>
      </li>
    </ul>
    <hr>
    <Cart></Cart>
  </div>
</template>
<style scoped>
  ul {
  list-style-type: none;
  padding: 0;
}
</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Cart from './Cart'

  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    components: {
      'Cart': Cart
    },
    methods: mapActions([
      'addToCart'
    ]),
    created () {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>
