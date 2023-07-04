import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import {useAuthStore} from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    }
  ]
} as RouterOptions)

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore()

  if (!['signin', 'signup'].includes(to.name as string) && !authStore.token) {
    next({ name: 'signin' })
    return
  }
  next()
})

export default router
