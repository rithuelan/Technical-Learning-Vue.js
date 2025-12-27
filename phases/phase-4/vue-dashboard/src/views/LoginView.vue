<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function login() {
  auth.login('Rithiha')
  router.push('/dashboard')
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>Login</h2>
      <p style="margin: 12px 0;">Access your dashboard</p>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

