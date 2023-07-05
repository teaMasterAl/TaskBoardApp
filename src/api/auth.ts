import apiRequest from "./apiRequest";

export const signUp = async (user) =>
    await apiRequest('POST', '/auth/signup', user)

export const signIn = async (user) =>
    await apiRequest('POST', '/auth/login', user)
