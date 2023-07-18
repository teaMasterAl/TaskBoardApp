<script setup lang="ts">
import {ref} from "vue";
import {useProjectStore} from "~/stores/project";
import {useAuthStore} from "~/stores/auth";

const fields = ref<object>({
  name: ''
})

const authStore = useAuthStore()
const projectStore = useProjectStore()

const onCreate = () => {
  projectStore.createProject(fields.value, authStore.token)
}

</script>

<template>
  <div>
    <div>Создать проект</div>
    <input type="text" v-model="fields.name">
    <button @click="onCreate">Создать!</button>
  </div>
</template>