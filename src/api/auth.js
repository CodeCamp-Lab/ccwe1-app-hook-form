import { publicApi, authApi } from "../lib/axios";

export async function userRegister(email, password) {
  const res = await publicApi.post("/auth/register", { email, password });
  return res.data;
}

export async function login(email, password) {
  const res = await publicApi.post("/auth/login", { email, password });
  return res.data.accessToken;
}

export async function getMe() {
  const res = await authApi.get("/auth/me");
  return res.data
}