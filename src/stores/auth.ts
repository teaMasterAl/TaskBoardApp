import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')

  const setToken = (authToken) => {
    token.value = authToken
    localStorage.setItem('token', authToken)
  }

    const initAuth = () => {
        const authToken = localStorage.getItem('token')
        if(authToken){
            token.value = authToken
        }
    }

  return { token, setToken, initAuth }
})
