import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/useAuthStore";

export default function CartPage() {
  // ดึงข้อมูลจาก Store และใช้ฟังก์ชันลบสินค้า
  // ... ทำเพิ่มตรงนี้

  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>My Cart</h1>
      {user && (
        <>
          <div>
            <p>id: {user.id}</p>
            <p>email: {user.email}</p>
            <p>role: {user.role}</p>
          </div>
          <br />
          <hr />
        </>
      )}

      {/* แสดงข้อความเมื่อตะกร้าว่าง และ Loop แสดงสินค้า */}
      {/* ... ทำเพิ่มตรงนี้ */}
      {cart.map((item) => (
        <div>
          {item.title} - ${item.price}{" "}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-400 cursor-pointer"
          >
            ลบ
          </button>
        </div>
      ))}
    </div>
  );
}
