<script setup lang="ts">
defineProps<{
  product: {
    id: number
    name: string
    price: number
  }
}>()
</script>

<template>
  <div class="border rounded p-4 shadow bg-white">
    <h3 class="font-bold text-lg">{{ product.name }}</h3>
    <p class="text-gray-600 mt-1">₹ {{ product.price }}</p>
  </div>
</template>
