<script setup lang="ts">
import { useHead } from '#app'

const { data, pending, error } =
  useFetchApi<{ id: number; name: string; price: number }[]>(
    '/api/products'
  )

useHead({
  title: 'Home | Nuxt Phase 5',
  meta: [{ name: 'description', content: 'SSR product page' }]
})
</script>

<template>
  <main class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Products</h1>

    <div v-if="pending">Loading...</div>
    <div v-if="error">Error loading products</div>

    <div v-if="data" class="grid gap-4">
      <ProductCard
        v-for="p in data"
        :key="p.id"
        :product="p"
      />
    </div>
  </main>
</template>
