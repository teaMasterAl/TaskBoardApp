<template>
  <div>
    <h2>Авторизация</h2>
    <div>
      <input type="text" placeholder="Логин" v-model="login" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button @click="handleSignUp">Войти</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signIn } from '@/api/auth'

const login = ref('')
const password = ref('')

const handleSignUp = async () => {
  const result = await signIn({
    login: login.value,
    password: password.value
  })
  console.log("result", result)
}
</script>

<style scoped></style>
