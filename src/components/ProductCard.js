import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      maxWidth: '200px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price} TL</strong>
    </div>
  );
}

export default ProductCard;
