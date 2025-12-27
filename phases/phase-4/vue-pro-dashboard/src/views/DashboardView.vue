<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <div>
    <h2>Dashboard</h2>
    <p>Welcome {{ auth.username }}</p>

    <router-link to="/products">Go to Products</router-link>
    <br /><br />

    <button @click="logout">Logout</button>
  </div>
</template>
