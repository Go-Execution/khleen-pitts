import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, CircleUserRound, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <>
      <div className="announcement">CHEMICAL FREE · VEGAN · CRUELTY-FREE · 72-HOUR PROTECTION</div>
      
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
          
          <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
            <Link to="/shop">Shop</Link>
            <Link to="/#difference">Why Yoni Losophy</Link>
            <Link to="/#ingredients">Ingredients</Link>
            <Link to="/#faq">FAQs</Link>
          </div>

          <Link to="/" className="brand-mark">
            <img src="/logo.jpeg" alt="Yoni Losophy" />
          </Link>

          <div className="nav-actions">
            <button className="icon-button"><Search size={20} /></button>
            <button className="icon-button"><CircleUserRound size={20} /></button>
            <button className="bag-button" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={20} /> <span>Bag ({cartCount})</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
