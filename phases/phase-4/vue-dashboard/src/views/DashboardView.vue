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
  <div class="container">
    <div class="card">
      <h2>Dashboard</h2>
      <p style="margin: 10px 0;">
        Welcome, <strong>{{ auth.username }}</strong>
      </p>

      <router-link to="/products">View Products</router-link>

      <div style="margin-top: 20px;">
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

