import { useAuthStore } from "../store/useAuthStore";
import { redirect } from "react-router";

export function protectedLoader() {
  const user = useAuthStore.getState().user;
  if (!user) return redirect("/login");
}

export function adminLoader() {
  const user = useAuthStore.getState().user;
  if (!user) return redirect("/login");
  if (user.role !== "ADMIN") return redirect("/");
}
