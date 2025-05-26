import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sepetiniz</h2>
      {cart.length === 0 ? (
        <p>Sepet boş</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                {item.name} - {item.quantity} adet - {item.price * item.quantity} TL
                <button 
                  style={{ marginLeft: '10px' }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
          <h3>Toplam: {total} TL</h3>
          <button onClick={clearCart}>Sepeti Temizle</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
