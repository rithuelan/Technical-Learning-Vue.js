<template>
  <div style="padding: 20px; font-family: Arial">

    <!-- ========================= -->
    <!-- 1. Declarative Rendering -->
    <!-- ========================= -->
    <h2>1️⃣ Declarative Rendering</h2>
    <p>Hello {{ name }}</p>
    <p>Age: {{ age }}</p>

    <hr />

    <!-- ========================= -->
    <!-- 2. Directives -->
    <!-- ========================= -->
    <h2>2️⃣ Directives</h2>

    <!-- v-bind -->
    <img :src="imageUrl" alt="Vue Logo" width="120" />

    <!-- v-on -->
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>

    <!-- v-model -->
    <div>
      <input v-model="username" placeholder="Enter username" />
      <p>Typed name: {{ username }}</p>
    </div>

    <hr />

    <!-- ========================= -->
    <!-- 3. Conditional Rendering -->
    <!-- ========================= -->
    <h2>3️⃣ v-if / v-show</h2>
    
    <button @click="isLoggedIn = !isLoggedIn">
      Toggle Login
    </button>

    <p v-if="isLoggedIn">✅ Logged In</p>
    <p v-else>❌ Logged Out</p>

    <p v-show="isLoggedIn">(Shown using v-show)</p>

    <hr />

    <!-- ========================= -->
    <!-- 4. v-for List Rendering -->
    <!-- ========================= -->
    <h2>4️⃣ v-for</h2>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
      </li>
    </ul>

    <hr />

    <!-- ========================= -->
    <!-- 5. Reactivity API -->
    <!-- ========================= -->
    <h2>5️⃣ Reactivity</h2>

    <p>ref() count: {{ count }}</p>
    <button @click="count++">Increase</button>

    <p>reactive() user:</p>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <button @click="user.age++">Increase Age</button>

    <hr />

    <!-- ========================= -->
    <!-- 6. Computed Properties -->
    <!-- ========================= -->
    <h2>6️⃣ Computed</h2>

    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />

    <p>Full Name: {{ fullName }}</p>

    <hr />

    <!-- ========================= -->
    <!-- 7. Watchers (API Call) -->
    <!-- ========================= -->
    <h2>7️⃣ Watcher (API)</h2>

    <input
      type="number"
      v-model="userId"
      min="1"
      max="10"
      placeholder="User ID"
    />

    <div v-if="apiUser">
      <p><strong>Name:</strong> {{ apiUser.name }}</p>
      <p><strong>Email:</strong> {{ apiUser.email }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

/* =========================
   1. Declarative Rendering
========================= */
const name = ref('Vue Learner')
const age = ref(22)

/* =========================
   2. Directives
========================= */
const imageUrl = ref('https://vuejs.org/images/logo.png')

const counter = ref(0)
const increment = () => {
  counter.value++
}

const username = ref('')

/* =========================
   3. Conditional Rendering
========================= */
const isLoggedIn = ref(false)

/* =========================
   4. v-for
========================= */
const tasks = ref([
  'Learn Vue 3',
  'Understand Composition API',
  'Build Projects'
])

/* =========================
   5. Reactivity API
========================= */
const count = ref(10)

const user = reactive({
  name: 'Rithiha',
  age: 22
})

/* =========================
   6. Computed Properties
========================= */
const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

/* =========================
   7. Watchers
========================= */
const userId = ref(1)
const apiUser = ref(null)

watch(userId, async (newId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${newId}`
  )
  apiUser.value = await response.json()
})
</script>
