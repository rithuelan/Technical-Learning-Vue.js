<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p>₹{{ product.price }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
}
</style>
