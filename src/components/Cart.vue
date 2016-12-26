<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
        <button @click="removeToCart(p)">-</button>
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
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

  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      ...mapActions(['removeToCart']),
      checkout (products) {
        this.$store.dispatch('checkout', products)
      }
    }
  }
</script>
