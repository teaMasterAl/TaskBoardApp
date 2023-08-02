<template>
  <div>
    <h2>Авторизация</h2>

    <form>
      <input type="text" placeholder="Логин" v-model="fields.login" />
      <input type="password" placeholder="Пароль" v-model="fields.password" />

      <button type="submit" @click.prevent="onSignIn">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import router from "~/router";
import { IUser } from "~/types/IUser";


const authStore = useAuthStore()

const fields = ref<IUser>({
  login: '',
  password: ''
})

const onSignIn = async () => {
  await authStore.login(fields.value)
  await router.push({ name: 'home'})
}
</script>
