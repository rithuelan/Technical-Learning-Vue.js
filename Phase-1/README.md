# Phase 1: The "Modern Web" Foundation

Before starting with **Vue 3**, you must master modern **JavaScript (ES6+)** concepts. Vue 3 is built entirely around these features.

---

## 📌 Topics Covered

* Reactivity Basics
* Async / Await
* ES Modules (import / export)
* Arrow Functions

---

## 1️⃣ Reactivity Basics

Reactivity is the foundation of Vue. It means when data changes, the UI updates automatically. JavaScript itself is not reactive — frameworks like Vue build reactivity systems on top of it.

### Variable Behavior

Understanding how variables behave helps you predict Vue state changes. Block-scoped variables prevent accidental overwrites and make state predictable.

### Reference vs Value

Primitive values are copied independently, but objects and arrays share the same memory. This is why updating a property in one place reflects everywhere.

Understanding how JavaScript variables behave is critical for Vue reactivity.

### 🔹 `var`, `let`, and `const`

| Keyword | Scope    | Reassignable | Hoisted |
| ------- | -------- | ------------ | ------- |
| var     | Function | Yes          | Yes     |
| let     | Block    | Yes          | No      |
| const   | Block    | No           | No      |

---

### 🔹 Objects & Arrays (Pass by Reference)

Objects and arrays share memory reference. This means when you copy an object or array, both variables point to the same data in memory.

---

## 2️⃣ Async / Await

Modern web apps are asynchronous — data loads from servers, not instantly. Async/await lets JavaScript pause execution until the data arrives, making asynchronous logic feel like normal step-by-step code.

It prevents callback nesting and makes error handling readable.

Used to handle API calls cleanly.

---

## 3️⃣ ES Modules (Import / Export)

Large projects are split into files called modules. Each file has its own scope and explicitly shares only what it exports. This keeps Vue projects clean, maintainable, and reusable.

Modules prevent global variable pollution and make teamwork easier.

### 🔹 Export

### 🔹 Import

---

## 4️⃣ Arrow Functions

Arrow functions provide short syntax and preserve the surrounding context. Vue Composition API relies heavily on this behavior, especially inside reactive logic and lifecycle hooks.

They avoid confusion with the meaning of `this`, which is a common source of bugs.

Why Vue uses Arrow Functions?

* Short syntax
* Maintains `this` context

---

## ✅ What You Should Be Able To Do

* Understand how JS variables behave
* Work with API calls
* Use import/export confidently
* Write clean arrow functions

---

🎯 Once you master these, Vue 3 will feel natural!
