<script setup lang="ts">
import { useProductStore } from '../stores/product'
import { ProductCard } from '../components/ProductCard.vue'

const productStore = useProductStore()
</script>

<template>
  <div>
    <h2>Products</h2>

    <ProductCard
      v-for="p in productStore.products"
      :key="p.id"
      :product="p"
    />
  </div>
</template>
