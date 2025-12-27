import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '../types/product'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([
    { id: 1, name: 'Laptop', price: 900 },
    { id: 2, name: 'Phone', price: 500 }
  ])

  return { products }
})
