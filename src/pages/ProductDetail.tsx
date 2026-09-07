import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <main className="container section-padding" style={{ textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="btn-outline" style={{ marginTop: '20px' }}>Back to Shop</button>
      </main>
    );
  }

  return (
    <main className="container section-padding">
      <div className="product-detail-split">
        <div className="product-images">
          <img src={product.image} alt={product.name} style={{ maxHeight: '600px', objectFit: 'contain' }} />
        </div>
        <div className="product-info">
          <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-secondary)' }}>{product.category}</p>
          <h1 style={{ fontSize: '42px', fontWeight: 800, textTransform: 'uppercase', margin: '10px 0 20px' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontWeight: 500, marginBottom: '30px' }}>${product.price}</p>
          
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
            {product.description}
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
            <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid var(--gray)', padding: '15px 20px', borderRadius: '40px' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none' }}><Minus size={16} /></button>
              <span style={{ fontWeight: 700 }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none' }}><Plus size={16} /></button>
            </div>
            <button 
              className="button" 
              style={{ flex: 1, padding: '20px' }}
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
          
          <div className="product-accordion">
            {/* Placeholder for accordion like ingredients, how to use, etc */}
            <div style={{ borderTop: '1px solid var(--gray)', padding: '20px 0' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', margin: 0 }}>Ingredients</h4>
            </div>
            <div style={{ borderTop: '1px solid var(--gray)', padding: '20px 0' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', margin: 0 }}>How to Use</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
