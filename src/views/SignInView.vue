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
import { useAuthStore, IUser } from '~/stores/auth'
import router from "~/router";

const authStore = useAuthStore()

const fields = ref<IUser>({
  login: '',
  password: ''
})

const onSignIn = async () => {
  await authStore.login(fields.value)

  router.push({ name: 'home'})
}
</script>
