import { useAuthStore } from "../store/useAuthStore";
import { redirect } from "react-router";

export function publicLoader() {
    const user = useAuthStore.getState().user;
    if(user) return redirect("/");
}