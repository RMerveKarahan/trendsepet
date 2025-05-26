import React from "react";


const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ marginRight: 6 }}
  >
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.54.57 1 1 0 011 1v3.42a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.42a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.27 1.11z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ marginRight: 6 }}
  >
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 17 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm10 2c.55 0 1 .45 1 1v1.5a1 1 0 01-2 0V5c0-.55.45-1 1-1zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M19.8 7.2a2.46 2.46 0 00-1.73-1.73C16.4 5 12 5 12 5s-4.4 0-6.07.47A2.46 2.46 0 004.2 7.2 25.94 25.94 0 004 12a25.94 25.94 0 00.2 4.8 2.46 2.46 0 001.73 1.73C7.6 19 12 19 12 19s4.4 0 6.07-.47a2.46 2.46 0 001.73-1.73A25.94 25.94 0 0020 12a25.94 25.94 0 00-.2-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);


const AppStoreIcon = () => (
  <svg width="120" height="40" fill="#000" viewBox="0 0 120 40">
    <rect width="120" height="40" rx="8" ry="8" fill="#000" />
    <text x="60" y="25" fill="#fff" fontSize="14" fontFamily="Arial" textAnchor="middle">
      App Store
    </text>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="120" height="40" fill="#000" viewBox="0 0 120 40">
    <rect width="120" height="40" rx="8" ry="8" fill="#3bcc5a" />
    <text x="60" y="25" fill="#fff" fontSize="14" fontFamily="Arial" textAnchor="middle">
      Google Play
    </text>
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#ddd",
        padding: "40px 20px",
        fontSize: 14,
        lineHeight: 1.6,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "space-between",
        }}
      >
        {/* LOGO ve İletişim */}
        <div style={{ flex: "1 1 250px", minWidth: 250 }}>
          <h2 style={{ marginBottom: 20, fontSize: 24, color: "#fff" }}>TrendSepet</h2>

          <h3 style={{ fontSize: 18, marginBottom: 10, color: "#eee" }}>Bize Ulaşın</h3>

          <p style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <PhoneIcon />
            <a href="tel:+905357179912" style={{ color: "#aaa", textDecoration: "none" }}>
              +90 135 117 91 19
            </a>
          </p>

          <p style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
            <EmailIcon />
            <a href="mailto:info@docca.com.tr" style={{ color: "#aaa", textDecoration: "none" }}>
              info@trendsepet.com.tr
            </a>
          </p>

          <h3 style={{ fontSize: 18, marginBottom: 10, color: "#eee" }}>Bizi Takip Edin</h3>
          <div style={{ display: "flex", gap: 15 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#aaa" }}>
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#aaa" }}>
              <InstagramIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: "#aaa" }}>
              <YoutubeIcon />
            </a>
          </div>

          <h3 style={{ fontSize: 18, marginTop: 30, marginBottom: 10, color: "#eee" }}>Mobil Uygulamamız</h3>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="#" aria-label="App Store">
              <AppStoreIcon />
            </a>
            <a href="#" aria-label="Google Play Store">
              <GooglePlayIcon />
            </a>
          </div>
        </div>

        {/* Müşteri Hizmetleri */}
        <div style={{ flex: "1 1 150px", minWidth: 150 }}>
          <h3 style={{ fontSize: 18, marginBottom: 20, color: "#eee" }}>Müşteri Hizmetleri</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa" }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Sıkça Sorulan Sorular</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>İade ve Değişim</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Havale Bildirimleri</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Sipariş Takip</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Elden Taksit Sorgulama</a></li>
          </ul>
        </div>

        {/* Kurumsal */}
        <div style={{ flex: "1 1 150px", minWidth: 150 }}>
          <h3 style={{ fontSize: 18, marginBottom: 20, color: "#eee" }}>Kurumsal</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa" }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Hakkımızda</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Mağazalarımız</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>KVKK Politikası</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Kullanıcı Sözleşmesi</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Garanti ve Ödeme</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>İptal ve İade</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Orijinallik ve Garanti</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Markalarımız</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Mesafeli Satış Sözleşmesi</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Gizlilik Sözleşmesi</a></li>
          </ul>
        </div>

        {/* Kategoriler */}
        <div style={{ flex: "1 1 150px", minWidth: 150 }}>
          <h3 style={{ fontSize: 18, marginBottom: 20, color: "#eee" }}>Kategoriler</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa" }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>YENİ SEZON</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>ERKEK</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>KADIN</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>MARKALAR</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>FIRSAT ÜRÜNLERİ</a></li>
          </ul>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #333",
          marginTop: 40,
          paddingTop: 20,
          textAlign: "center",
          color: "#666",
          fontSize: 12,
        }}
      >
        © 2025 TRENDSEPET. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
