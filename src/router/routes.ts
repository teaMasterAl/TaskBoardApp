import type {RouteRecordRaw} from "vue-router";

import HomeView from '~/views/HomeView.vue'
import SignUpView from '~/views/SignUpView.vue'
import SignInView from '~/views/SignInView.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView
    }
]