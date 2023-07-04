<template>
  <div>
    <h2>Авторизация</h2>
    <div>
      <input type="text" placeholder="Логин" v-model="login" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button @click="handleSignIn">Войти</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signIn } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'

const login = ref('')
const password = ref('')

const authStore = useAuthStore()

const handleSignIn = async () => {
  const result = await signIn({
    login: login.value,
    password: password.value
  })
  authStore.setToken(result.token)
}
</script>

<style scoped></style>
