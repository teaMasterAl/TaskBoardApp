<template>
  <div class="Authentication">
    <h2>
      {{formTitle}}
    </h2>

    <div>
      <input type="text" placeholder="Имя" v-model="name">
      <input type="text" placeholder="Логин" v-model="login">
      <input type="text" placeholder="Пароль" v-model="password">
      <button @click="signUp">
        {{formBtnText}}
      </button>
    </div>

    <div>
      {{helpToggleText}}
      <span @click="toggleForm">
        {{btnToggleFormText}}
      </span>
    </div>

  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const name = ref('')
const login = ref('')
const password = ref('')
const path = ref('login')


const formTitle = computed( () => path.value === 'login' ? 'Авторизация' : 'Регистрация')
const formBtnText = computed( () => path.value === 'login' ? 'Войти' : 'Зарегистрироваться')
const helpToggleText = computed( () => path.value === 'login' ? 'Если вы тут первый раз' : 'Уже зарегистированы')
const btnToggleFormText = computed( () => path.value === 'login' ? 'Зарегистрируйтесь' : 'Войдите')

const toggleForm = () => {
  if(path.value === 'login'){
    path.value = 'signup'
    return
  }
  path.value = 'login'
}
const signUp = () => {
  const user = {
    name: name.value,
    login: login.value,
    password: password.value,
  }
  fetch(
      `http://localhost:3001/auth/${path.value}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      }
  )
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data)
  })
}
</script>

<style scoped>
span{
  border-bottom: 1px solid green;
  cursor: pointer;
}
</style>