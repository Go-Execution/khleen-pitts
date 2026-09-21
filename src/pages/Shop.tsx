import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="container section-padding">
      <div className="section-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All'}
        </h1>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => handleCategoryClick(cat)}
              className="btn-outline"
              style={{
                background: selectedCategory === cat ? 'var(--black)' : 'transparent',
                color: selectedCategory === cat ? 'var(--white)' : 'var(--text-primary)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <p>No products found matching your criteria.</p>
          <button className="button" style={{ marginTop: '20px', background: 'var(--black)', color: 'var(--white)' }} onClick={() => {
            setSelectedCategory('All');
            searchParams.delete('search');
            searchParams.delete('category');
            setSearchParams(searchParams);
          }}>Clear Filters</button>
        </div>
      ) : (
        <div className="product-grid" style={{ gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {filteredProducts.map(product => (
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
      )}
    </main>
  );
};
