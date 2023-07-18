import {defineStore} from "pinia";
import {api} from "~/api/api";

export const useProjectStore = defineStore('project', () => {

    const createProject = async (params, token) => {
        await api.project.create(params, token)
    }

    return {
        createProject,
    }

})