import { NavLink } from "react-router";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export default function NavBar() {
  // ดึงจำนวนสินค้าจาก Store
  const cartCount = useCartStore((state) => state.cart.length);

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      logout();
      alert("ออกจากระบบแล้ว");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="relative">
      <NavLink to="/">Shop</NavLink> |&nbsp;
      <NavLink to="/cart">Cart ({cartCount})</NavLink>
      <button
        onClick={handleClick}
        className="absolute right-10 bottom-2 border bg-blue-600 p-2 rounded text-white font-bold cursor-pointer hover:bg-blue-500"
      >
        {user ? "ออกจากระบบ" : "เข้าระบบ"}
      </button>
    </nav>
  );
}
