import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const lifestyleImg = 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=1000';

export const Home: React.FC = () => {
  const { addToCart } = useCart();
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Freshness<br/>that cares for your skin.</h1>
          <p>Advanced 72 Hour Protection • Magnesium Hydroxide • 100% Vegan</p>
          <Link to="/shop" className="button" style={{ display: 'inline-block' }}>Shop Yoni Losophy</Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding container">
        <div className="section-header">
          <h2>Our Best Sellers</h2>
          <Link to="/shop" className="btn-outline">Shop All</Link>
        </div>
        <div className="product-grid">
          {bestSellers.map(product => (
            <div key={product.id} className="product-card">
              <span className="badge">Best Seller</span>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart - ${product.price}</button>
              <div className="product-meta">
                <Link to={`/product/${product.id}`}><span>{product.name}</span></Link>
                <span>${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Section */}
      <section className="split-section" id="difference">
        <img src={lifestyleImg} alt="Lifestyle" className="split-img" />
        <div className="split-content">
          <h2 style={{ fontSize: '36px', fontStyle: 'italic', fontFamily: 'serif', margin: '0 0 30px' }}>
            Natural doesn't have to mean compromising on performance.
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
            YONI LOSOPHY was created for active and health-conscious individuals who seek chemical-free and vegan products. Our formula is thoughtfully made without bicarbonate of soda, using Magnesium Hydroxide as the active odour-fighting ingredient.
          </p>
          <div>
            <button className="btn-outline" style={{ borderColor: 'black' }}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Scents / Trial Kits Section */}
      <section className="scents-section" id="ingredients">
        <div className="container">
          <div className="section-header">
            <h2>Discover Your Favourites</h2>
            <Link to="/shop" className="btn-outline">Shop Trial Kits</Link>
          </div>
          <div className="scents-grid">
            {products.slice(0, 5).map(product => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <p style={{ textAlign: 'center', fontSize: '11px', textTransform: 'uppercase', marginTop: '20px', letterSpacing: '1px' }}>{product.name.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats / Transition Guide */}
      <section className="gift-sets" id="faq">
        <div className="gift-split">
          <div style={{ padding: '80px 10%' }}>
            <h2 style={{ fontSize: '32px', textTransform: 'uppercase', fontWeight: 800, marginBottom: '20px' }}>Making the switch?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Introduce natural deodorant into your daily routine. Your underarms may experience an adjustment period when changing from conventional antiperspirant. Start with clean, dry skin and give yourself a little patience as you discover your best routine.
            </p>
            <button className="btn-outline" style={{ borderColor: 'black' }}>Read Transition Guide</button>
          </div>
          <img src={lifestyleImg} alt="Transition" style={{ height: '500px' }} />
        </div>
      </section>
    </main>
  );
};
