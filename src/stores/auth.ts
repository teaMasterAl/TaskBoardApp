import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import { api } from "~/api/api";

export interface IUser {
    name?: string,
    login: string,
    password: string
}

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string>('')

    const hasToken = computed(() => Boolean(localStorage.getItem('token')))

    const login = async (params: IUser) => {

        const data = await api.auth.login(params)
        console.log("data", data)
        if( data?.token ) {
            setToken(data.token)
        }

    }

    const register = async (params: IUser) => {

        await api.auth.register(params)

        // TODO: после создания пользователя - его авторизовать
    }

    const setToken = (authToken: string) => {
        token.value = authToken

        localStorage.setItem('token', authToken)
    }

    const authorize = () => {
        // TODO: fetch profile
        token.value = localStorage.getItem('token') as string
    }

  return {
      token,
      hasToken,

      login,
      register,
      setToken,
      authorize
  }
})
