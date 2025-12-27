<script setup lang="ts">
import { useProductStore } from '../stores/product'
import ProductCard from '../components/ProductCard.vue'

const productStore = useProductStore()
</script>

<template>
  <div class="container">
    <h2 style="margin-bottom: 16px;">Products</h2>

    <ProductCard
      v-for="p in productStore.products"
      :key="p.id"
      :product="p"
    />
  </div>
</template>
