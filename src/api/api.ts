import apiRequest from "./apiRequest";
import type { IUser } from "~/types/IUser";
import {ILoginResponse} from "~/types/ILoginResponse";


export const api = {
    auth: {
        login: (user: IUser): Promise<ILoginResponse> => apiRequest('POST', '/auth/login', user),
        register: (user: IUser): Promise<boolean> => apiRequest('POST', '/auth/signup', user)
    },
    project: {
        create: (params, token) => apiRequest('POST', '/projects/create-project', params, token)
    }
}
