import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { SliderSection } from '../components/SliderSection';

const lifestyleImg = '/products/product-4.jpeg';

export const Home: React.FC = () => {
  const { addToCart } = useCart();
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-media">
          <img src="/hero.jpg" alt="Yoni/Body — Freshness that cares for your skin" className="hero-image" />
        </div>
        <div className="hero-content">
          <h1>Freshness<br/>that cares for your skin.</h1>
          <p>Advanced 72 Hour Protection • Magnesium Hydroxide • 100% Vegan</p>
          <Link to="/shop" className="button" style={{ display: 'inline-block' }}>Shop Yoni/Body</Link>
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

      {/* Oil Collection Slider */}
      <SliderSection 
        title="Pure & Natural Oils"
        text="Discover our signature collection of botanical oils, formulated to nourish, balance, and restore your natural harmony. Hand-crafted with 100% vegan ingredients."
        buttonText="View all oil collection"
        link="/shop?category=Oil"
        images={[
          '/products/oil-1.png',
          '/products/oil-2.png',
          '/products/oil-3.png'
        ]}
        imagePosition="right"
        bgColor="#faf6f0"
      />

      {/* Bundle Collection Slider */}
      <SliderSection 
        title="Complete Wellness Bundles"
        text="Experience the ultimate self-care routine with our curated bundles. Everything you need for a comprehensive, chemical-free personal care ritual."
        buttonText="View all bundle collection"
        link="/shop?category=Bundle"
        images={[
          '/products/bundle-1.png',
          '/products/bundle-2.png',
          '/products/bundle-3.png'
        ]}
        imagePosition="left"
        bgColor="var(--light-gray)"
      />
    </main>
  );
};
