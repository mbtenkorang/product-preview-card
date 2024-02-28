<script setup>
import { reactive } from 'vue';
import ProductComponent from './components/ProductComponent.vue';

const _productinfo = reactive({
  category: "Perfume",
  name: "Gabrielle Essence Eau De Parfum",
  images: {
    mobile: "./images/image-product-mobile.jpg",
    desktop: "./images/image-product-desktop.jpg",

  },
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, \
  Perfumer-Creator for the House of CHANEL.",
  current_price: 149.99,
  previous_price: 169.99,
})


</script>

<template>
  <ProductComponent :product_data="_productinfo" />
</template>

<style scoped></style>
