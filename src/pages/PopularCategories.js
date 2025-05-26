import React from 'react';
import './PopularCategories.css';

const categories = [
  { name: 'T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBn6d0mYlzq84cbSFETakOH__UbGdp7wiXg&s' },
  { name: 'İç Giyim', image: 'https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg' },
  { name: 'Pantolon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_9fRcuI3yplgplBqfQTeqfXsx2IEk6RaPA&s' },
  { name: 'Elbise', image: 'https://images.pexels.com/photos/1488460/pexels-photo-1488460.jpeg  ' },
  { name: 'Bluz', image: 'https://images.pexels.com/photos/9775875/pexels-photo-9775875.jpeg' },
  { name: 'Gömlek', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnYFtDJDB3WNDok3smPZXkf9Ssc095PapKiwLsFwKV6WMTvn1mm6xdOCysHz7glvGs40GzliyJ8jX1peNIAM4-ta5mP9dEYs0F2tZon1L821dSn8w581rhOwv5g8Ko8GoUIX0sG3Bw_w&usqp=CAc' },
];

function PopularCategories() {
  return (
    <div className="popular-categories-container">
      <h2>Popüler Kategoriler</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
