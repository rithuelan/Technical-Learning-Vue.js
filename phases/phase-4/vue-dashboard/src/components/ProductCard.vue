<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p style="margin-top: 8px;">₹ {{ product.price }}</p>
  </div>
</template>
