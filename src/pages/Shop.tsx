import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Shop: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <main className="container section-padding">
      <div className="section-header">
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Shop All</h1>
      </div>
      <div className="product-grid" style={{ gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {products.map(product => (
          <div key={product.id} className="product-card" style={{ padding: '40px 20px' }}>
            {product.isBestSeller && <span className="badge">Best Seller</span>}
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
    </main>
  );
};
