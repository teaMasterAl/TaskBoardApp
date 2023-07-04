<template>
  <div>
    <h2>Регистрация</h2>
    <div>
      <input type="text" placeholder="Имя" v-model="name" />
      <input type="text" placeholder="Логин" v-model="login" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button @click="handleSignUp">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signUp } from '@/api/auth'

const name = ref('')
const login = ref('')
const password = ref('')

const handleSignUp = async () => {
  await signUp({
    name: name.value,
    login: login.value,
    password: password.value
  })
}
</script>

<style scoped></style>
