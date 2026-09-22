import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const bgImages = [
  '/products/product-4.jpeg',
  '/products/yoni-oil.jpg',
  '/products/complete-bundle.jpg',
  '/products/steam-seat-kit.jpg'
];

export const Footer: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section style={{ 
        position: 'relative', 
        textAlign: 'center', 
        padding: '120px 20px', 
        overflow: 'hidden',
        color: 'var(--white)'
      }}>
        {bgImages.map((img, index) => (
          <img 
            key={img} 
            src={img} 
            alt="" 
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: -2,
              opacity: index === currentBg ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: -1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px' }}>Ready to Experience Yoni Losophy?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '40px', fontSize: '16px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Elevate your self-care routine with our 100% vegan, chemical-free products. Designed for your natural harmony.
          </p>
          <Link to="/shop" className="btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>Shop All Products</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <div>
              <h4>Shop</h4>
              <Link to="/shop">All Products</Link>
              <Link to="/shop">Stick</Link>
              <Link to="/shop">Cream</Link>
              <Link to="/shop">Spray</Link>
            </div>
            <div>
              <h4>About</h4>
              <Link to="/#story">Our Story</Link>
              <Link to="/#ingredients">Ingredients</Link>
              <Link to="/#faq">FAQs</Link>
            </div>
            <div>
              <h4>Support</h4>
              <Link to="/#footer">Contact</Link>
              <Link to="/#footer">Shipping & Returns</Link>
              <Link to="/#footer">Privacy Policy</Link>
            </div>
            <div>
              <h4>Social</h4>
              <a href="#footer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-brand">
          <div className="marquee">
            <span>YONI LOSOPHY — YONI LOSOPHY — YONI LOSOPHY — YONI LOSOPHY — </span>
            <span>YONI LOSOPHY — YONI LOSOPHY — YONI LOSOPHY — YONI LOSOPHY — </span>
          </div>
        </div>
      </footer>
    </>
  );
};
