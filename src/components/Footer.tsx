import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
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
        <h1>YONI LOSOPHY</h1>
      </div>
    </footer>
  );
};
