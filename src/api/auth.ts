import apiRequest from "./apiRequest";
import type {IUser} from "~/stores/auth";

interface ILoginResponse {
    token: string
}

export const api = {
    auth: {
        login: (user: IUser): Promise<ILoginResponse> => apiRequest('POST', '/auth/login', user),
        register: (user: IUser): Promise<boolean> => apiRequest('POST', '/auth/signup', user)
    },
}
