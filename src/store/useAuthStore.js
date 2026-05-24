import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login, getMe } from "../api/auth";

const userConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {
    const accessToken = await login(email, password);
    set({ accessToken });
    await get().fetchUser();
  },
  fetchUser: async () => {
    const user = await getMe();
    set({ user });
  },
  logout: () => {
    set({ accessToken: null, user: null });
  },
});

export const useAuthStore = create(
  persist(userConfig, { name: "auth-storage" }),
);
