import React, { useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80",
    title: "Modern T-Shirtler",
    price: "₺399.99 ",
  },
  {
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Şık Kadın Çantası",
    price: "₺499.99",
  },
  {
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1920&q=80",
    title: "Siyah Spor Ayakkabı",
    price: "₺299.99",
  },
];

const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.4)",
  border: "none",
  color: "white",
  padding: "12px 18px",
  cursor: "pointer",
  borderRadius: "50%",
  fontSize: "28px",
  transition: "background 0.3s",
  userSelect: "none",
  zIndex: 2,
};

export default function FullWidthSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "550px",
        overflow: "hidden",
        margin: 0,
        userSelect: "none",
      }}
    >
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100vw",
          height: "550px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "550px",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />

      {/* Ürün bilgisi kutusu */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "40px",
          color: "white",
          zIndex: 2,
          maxWidth: "400px",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2 style={{ margin: "0 0 10px" }}>{slides[currentIndex].title}</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>{slides[currentIndex].price}</p>
      </div>

      <button
        onClick={prevSlide}
        style={{ ...buttonStyle, left: "10px" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.4)")}
        aria-label="Önceki"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{ ...buttonStyle, right: "10px" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.4)")}
        aria-label="Sonraki"
      >
        ›
      </button>
    </div>
  );
}
