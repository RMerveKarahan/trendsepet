import React from 'react';

const campaignItems = [
  {
    href: "/kampanya/499-tl-alti-urunler-c-20048866",
    imgSrc: "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/Kategori_Koleksiyonu_EditorunSecimi_ck_499_1747830775.jpg",
    alt: "Hemen Keşfet!",
    text: "Hemen Keşfet!",
  },
  {
    href: "/kampanya/indirim-firsati-c-23895739",
    imgSrc: "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/Kategori_Koleksiyonu_EditorunSecimi_ck_999_1747830777.jpg",
    alt: "İndirimleri Kaçırma!",
    text: "İndirimleri Kaçırma!",
  },
  {
    href: "/kampanya/indirim-firsati-c-23895740",
    imgSrc: "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/Kategori_Koleksiyonu_EditorunSecimi_ck_1499_1747830773.jpg",
    alt: "Fırsatları Kaçırma!",
    text: "Fırsatları Kaçırma!",
  },
  {
    href: "/kampanya/1999-tl-alti-urunler-c-23894989",
    imgSrc: "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/Kategori_Koleksiyonu_EditorunSecimi_ck_1999_1747830771.jpg",
    alt: "Tıkla, Alışverişe Başla!",
    text: "Tıkla, Alışverişe Başla!",
  },
];

const CampaignSlider = () => {
  const styles = {
    container: {
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      background: '#fff',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      margin: '20px 0',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      padding: '0 20px 40px',
      width: '100%',
      boxSizing: 'border-box',
    },
    card: {
      background: '#f9f9f9',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    img: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    textWrapper: {
      padding: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Büyük Çılgın <br />
        <b>İndirimleri Kaçırma!</b>
      </h2>

      <div style={styles.grid}>
        {campaignItems.map((item, index) => (
          <a href={item.href} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={styles.card}>
              <img src={item.imgSrc} alt={item.alt} style={styles.img} />
              <div style={styles.textWrapper}>
                <h5>{item.text}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CampaignSlider;
