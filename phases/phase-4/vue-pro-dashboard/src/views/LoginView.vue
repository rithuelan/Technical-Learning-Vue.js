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
  <div>
    <h2>Login</h2>
    <button @click="login">Login</button>
  </div>
</template>
