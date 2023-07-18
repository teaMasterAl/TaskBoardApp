<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Регистрация</RouterLink>
        <RouterLink to="/signin">Авторизация</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

onBeforeMount(() => {
  authStore.hasToken && authStore.authorize()
})
</script>
