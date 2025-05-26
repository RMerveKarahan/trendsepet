import React from 'react';
import { useParams, Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Kırmızı Elbise', price: 120, image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg' },
  { id: 2, name: 'Beyaz Spor Ayakkabı', price: 150, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg' },
  { id: 3, name: 'Kol Saati', price: 90, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' },
  { id: 4, name: 'Sırt Çantası', price: 110, image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg' },
  { id: 5, name: 'Güneş Gözlüğü', price: 130, image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
  { id: 6, name: 'Laptop', price: 180, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg' },
  { id: 7, name: 'Bluetooth Kulaklık', price: 200, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg' },
  { id: 8, name: 'Kahve Makinesi', price: 140, image: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg' },
  { id: 9, name: 'Parfüm', price: 160, image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg' },
  { id: 10, name: 'Şapka', price: 170, image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg' },
  { id: 11, name: 'Sweatshirt', price: 190, image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
  { id: 12, name: 'Bileklik', price: 210, image: 'https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg' },
  { id: 13, name: 'Kalemlik', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMNfh_cf-J5FE1yxc15r26jYaJ1aaY5Wt5w&s' },
  { id: 14, name: 'Kupa Bardak', price: 40, image: 'https://images.pexels.com/photos/5860564/pexels-photo-5860564.jpeg' },
];


function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <h1>{product.name}</h1>
      <p>Fiyat: {product.price} TL</p>
      <p>{product.description}</p>
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block' }}>
        Geri dön
      </Link>
    </div>
  );
}

export default ProductDetail;
