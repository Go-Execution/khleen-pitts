import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

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
            <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)}>
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button className="bag-button" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={20} /> <span>Bag ({cartCount})</span>
            </button>
          </div>
        </nav>

        {searchOpen && (
          <div className="search-overlay">
            <div className="container">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <Search size={20} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="button" style={{ padding: '8px 24px' }}>Search</button>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
