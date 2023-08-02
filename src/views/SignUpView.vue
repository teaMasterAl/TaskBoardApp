<template>
  <div>
    <h2>Регистрация</h2>

    <form>
      <input type="text" placeholder="Имя" v-model="fields.name" />
      <input type="text" placeholder="Логин" v-model="fields.login" />
      <input type="password" placeholder="Пароль" v-model="fields.password" />

      <button type="submit" @click.prevent="onSignUp">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { IUser } from "~/types/IUser";

const authStore = useAuthStore()

const fields = ref<IUser>({
  name: '',
  login: '',
  password: ''
})

const onSignUp = async () => {
  await authStore.register(fields.value)
}
</script>
