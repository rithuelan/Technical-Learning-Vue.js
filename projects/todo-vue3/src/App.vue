<template>
  <div class="app">
    <h1>Vue 3 To-Do List</h1>

    <div class="input-container">
      <input
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
      />
      <button @click="addTodo">Add</button>
    </div>

    <ul class="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ completed: todo.completed }"
      >
        <span @click="toggleTodo(todo)">{{ todo.text }}</span>
        <button @click="removeTodo(index)">❌</button>
      </li>
    </ul>

    <p v-if="todos.length === 0">No tasks yet. Add something!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// reactive variables
const newTodo = ref('')
const todos = ref([])

// add new task
const addTodo = () => {
  if (newTodo.value.trim() === '') return
  todos.value.push({ text: newTodo.value, completed: false })
  newTodo.value = ''
}

// toggle completed
const toggleTodo = (todo) => {
  todo.completed = !todo.completed
}

// remove task
const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #4f46e5;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button {
  padding: 8px 12px;
  background-color: #4f46e5;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

button:hover {
  background-color: #3730a3;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  background: #f3f4f6;
  margin: 8px 0;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
}

.completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.todo-list button {
  background: none;
  color: red;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
</style>
