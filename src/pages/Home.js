import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Home.css';
import PopularCategories from './PopularCategories';
import TrendsepetInfo from "../components/TrendsepetInfo";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SliderComponent from "../components/SliderComponent";
import CampaignSliderm from "../components/CampaignSlider";


const products = [
  { id: 1, name: 't-Shirt', price: 120, image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg' },
  { id: 2, name: 'Spor Ayakkabı', price: 150, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg' },
  { id: 3, name: 'Kol Saati', price: 90, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' },
  { id: 4, name: 'Sırt Çantası', price: 110, image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg' },
  { id: 5, name: 'Güneş Gözlüğü', price: 130, image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
  { id: 6, name: 'Laptop', price: 180, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg' },
  { id: 7, name: 'Bluetooth Kulaklık', price: 200, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg' },
  { id: 8, name: 'Kahve Makinesi', price: 140, image: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg' },
  { id: 9, name: 'Parfüm', price: 160, image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg' },
  { id: 10, name: 'Elbise', price: 170, image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg' },
  { id: 11, name: 'Sweatshirt', price: 190, image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
  { id: 12, name: 'Bileklik', price: 210, image: 'https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg' },
  { id: 13, name: 'Kalemlik', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMNfh_cf-J5FE1yxc15r26jYaJ1aaY5Wt5w&s' },
  { id: 14, name: 'Kupa Bardak', price: 40, image: 'https://images.pexels.com/photos/5860564/pexels-photo-5860564.jpeg' },
];

function Home() {
  const { addToCart } = useCart();

  return (
    <>
    <Slider/>
    <PopularCategories />

    <div style={{ 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  textAlign: "center", 
  height: "200px"  
}}>
  <br></br>
    <h2>Büyük Çılgın  <br></br>
   <b> %60'a Varan İndirimler! </b></h2>
  </div>
    <SliderComponent/>


    <div style={{ 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  textAlign: "center", 
  height: "200px"  
}}>
  <h2>
   Öne Çıkanlar
    
  </h2>
</div>



    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
      
    >
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          style={{
            textDecoration: 'none',
            color: 'black',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fafafa',
            transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.07)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            e.currentTarget.style.borderColor = '#3498db';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{ padding: '10px' }}>
            <h3
              style={{
                margin: '0 0 10px 0',
                fontSize: '1.0rem',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                color: '#34495e',
                fontWeight: '600',
              }}
            >
              {product.name}
            </h3>

            <p style={{ margin: 0, fontWeight: 'bold', color: '#2c3e50' }}>
              {product.price} TL
            </p>
            <button
            className="button-add-to-cart"
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '8px 0',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
                alert(`${product.name} sepete eklendi!`);
              }}
            >
              Sepete Ekle
            </button>
          </div>
        </Link>
      ))}
    </div>
    <CampaignSliderm/>
    <TrendsepetInfo />
    <Footer/>
    </>
  );
}

export default Home;
