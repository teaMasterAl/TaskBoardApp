import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import {useAuthStore} from "~/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes
})

// TODO: перенести в миддлвары
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const routeName = to.name as string

  if (['signin', 'signup'].includes(routeName)) {
    return next()
  }

  if (!authStore.token) {
    next({ name: 'signin' })

    return
  }

  next()
})

export default router
