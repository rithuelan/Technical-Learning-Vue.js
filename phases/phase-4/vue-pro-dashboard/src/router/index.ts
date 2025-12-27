import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },

    { path: '/login', component: LoginView },

    {
      path: '/dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },

    {
      path: '/products',
      component: ProductsView,
      meta: { requiresAuth: true }
    }
  ]
})

// 🔐 Route Guard
router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return '/login'
  }
})

export default router
