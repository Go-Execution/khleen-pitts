import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const product = id ? getProductById(id) : undefined;
  
  // Get 3 random or top featured products (excluding current)
  const featuredProducts = products.filter(p => p.id !== id).slice(0, 3);

  if (!product) {
    return (
      <main className="container section-padding" style={{ textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="btn-outline" style={{ marginTop: '20px' }}>Back to Shop</button>
      </main>
    );
  }

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main>
      <div className="container section-padding">
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
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
              <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid var(--gray)', padding: '15px 20px', borderRadius: '40px' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none' }}><Minus size={16} /></button>
                <span style={{ fontWeight: 700 }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none' }}><Plus size={16} /></button>
              </div>
              <button 
                className="button" 
                style={{ flex: 1, padding: '20px', minWidth: '200px', background: 'var(--black)', color: 'var(--white)' }}
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            <div className="product-accordion">
              <div style={{ borderTop: '1px solid var(--gray)', borderBottom: '1px solid var(--gray)' }}>
                <button 
                  onClick={() => toggleAccordion('benefits')}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none' }}
                >
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', margin: 0 }}>Benefits</h4>
                  {openAccordion === 'benefits' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openAccordion === 'benefits' && (
                  <div style={{ paddingBottom: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    <ul>
                      <li style={{ marginBottom: '10px' }}>100% natural, chemical-free formulation</li>
                      <li style={{ marginBottom: '10px' }}>Balances pH and supports natural flora</li>
                      <li style={{ marginBottom: '10px' }}>Provides long-lasting 72-hour protection</li>
                      <li style={{ marginBottom: '10px' }}>Soothes and moisturizes delicate skin</li>
                    </ul>
                  </div>
                )}
              </div>

              <div style={{ borderBottom: openAccordion === 'ingredients' ? 'none' : '1px solid var(--gray)' }}>
                <button 
                  onClick={() => toggleAccordion('ingredients')}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none' }}
                >
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', margin: 0 }}>Ingredients</h4>
                  {openAccordion === 'ingredients' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openAccordion === 'ingredients' && (
                  <div style={{ paddingBottom: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    {product.ingredients || 'Detailed ingredient list coming soon.'}
                  </div>
                )}
              </div>
              
              <div style={{ borderBottom: '1px solid var(--gray)' }}>
                <button 
                  onClick={() => toggleAccordion('how-to-use')}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none' }}
                >
                  <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', margin: 0 }}>How to Use</h4>
                  {openAccordion === 'how-to-use' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openAccordion === 'how-to-use' && (
                  <div style={{ paddingBottom: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    {product.howToUse || 'Usage instructions coming soon.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <section className="section-padding" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2>You May Also Like</h2>
          </div>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {featuredProducts.map(fp => (
              <div key={fp.id} className="product-card">
                {fp.isBestSeller && <span className="badge">Best Seller</span>}
                <Link to={`/product/${fp.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <img src={fp.image} alt={fp.name} />
                </Link>
                <button className="add-to-cart" onClick={() => addToCart(fp)}>Add to Cart - ${fp.price}</button>
                <div className="product-meta">
                  <Link to={`/product/${fp.id}`} onClick={() => window.scrollTo(0, 0)}><span>{fp.name}</span></Link>
                  <span>${fp.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
