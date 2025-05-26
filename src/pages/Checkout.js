import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cartItems, total } = useCart();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Siparişiniz alındı! 🎉');
    // Gerçek ödeme sistemi ile entegre etmek istenirse buraya API çağrısı yapılır
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Ödeme Sayfası</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="name" placeholder="Ad Soyad" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-posta" value={form.email} onChange={handleChange} required />
        <textarea name="address" placeholder="Teslimat Adresi" value={form.address} onChange={handleChange} required />

        <hr />

        <input type="text" name="cardNumber" placeholder="Kart Numarası" value={form.cardNumber} onChange={handleChange} required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" name="expiry" placeholder="MM/YY" value={form.expiry} onChange={handleChange} required />
          <input type="text" name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} required />
        </div>

        <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '10px' }}>
          <h4>Sepet Özeti:</h4>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.price * item.quantity).toFixed(2)} TL</span>
            </div>
          ))}
          <h3 style={{ marginTop: '15px' }}>Toplam: {total.toFixed(2)} TL</h3>
        </div>

        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#52c41a',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '15px'
        }}>
          Siparişi Onayla
        </button>
      </form>
    </div>
  );
}

export default Checkout;
