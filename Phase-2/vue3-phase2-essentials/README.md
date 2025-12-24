# Phase 2: Vue 3 Essentials — The Core (Composition API)

This phase trains you to think the **Vue way**. Vue is not about manually changing the DOM — it is about **declaring state** and letting Vue manage updates automatically using its reactivity system.

You will work exclusively with the **Composition API** using `<script setup>`.

---

## 1️⃣ Declarative Rendering

In Vue, you never say *how* to update the screen. You declare *what should appear* based on data.

When the underlying state changes, Vue re-renders the UI automatically.

This removes the need for:

* `document.getElementById`
* manual DOM manipulation

You simply connect UI to state and Vue does the rest.

---

## 2️⃣ Directives

Directives are special attributes that give behavior to HTML elements.

### 🔹 v-bind (`:`)

Binds HTML attributes to reactive state. When state changes, the attribute updates automatically.

Used for:

* class switching
* dynamic images
* conditional styling

---

### 🔹 v-on (`@`)

Listens for user actions.

Used for:

* button clicks
* keyboard events
* form submission

This keeps event logic inside Vue instead of scattered JavaScript files.

---

### 🔹 v-model

Creates **two-way data binding** between form fields and state.

When the user types → data updates.
When data updates → input updates.

This eliminates manual syncing of form values.

---

### 🔹 v-if / v-show / v-for

| Directive | Purpose                           |
| --------- | --------------------------------- |
| v-if      | Adds or removes elements from DOM |
| v-show    | Shows or hides using CSS          |
| v-for     | Renders lists dynamically         |

Use these to control what the user sees based on state.

---

## 3️⃣ Reactivity API

Vue tracks changes using a reactivity engine.

### 🔹 ref()

Used for **single values** like numbers, strings, booleans.

### 🔹 reactive()

Used for **grouped structured data** like objects.

Correct use ensures Vue detects changes and updates UI instantly.

---

## 4️⃣ Computed Properties

Computed properties derive new values from existing state.

They:

* Automatically update
* Cache results
* Avoid unnecessary recalculations

They are used when the UI needs transformed data.

---

## 5️⃣ Watchers

Watchers respond to state changes by performing actions.

They are not used for rendering — they are used for **side effects**, such as:

* calling APIs
* saving to storage
* reacting to user input

They trigger logic whenever data changes.

---

🎯 After Phase 2, you will stop thinking in DOM and start thinking in reactive state — the true Vue mindset.
