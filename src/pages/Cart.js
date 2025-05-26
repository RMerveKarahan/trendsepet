import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, addToCart, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>Sepetiniz</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#777' }}>Sepetiniz boş. 🛒</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '15px',
                borderRadius: '10px',
                background: '#f9f9f9',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginRight: '20px',
                }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>{item.name}</h4>
                <p style={{ color: '#555', marginBottom: '10px' }}>{item.price} TL</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: '#ff4d4f',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Çıkar
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background: '#1890ff',
                      color: '#fff',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                  <span style={{ marginLeft: '15px' }}>Adet: {item.quantity}</span>
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '30px',
              padding: '20px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            }}
          >
            <h3 style={{ fontSize: '20px' }}>
              Toplam Tutar: <strong>{total.toFixed(2)} TL</strong>
            </h3>
            <button
              onClick={handleCheckout}
              style={{
                background: '#52c41a',
                color: '#fff',
                padding: '12px 24px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Ödemeye Geç
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
