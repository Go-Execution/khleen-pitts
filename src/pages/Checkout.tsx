import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Ensure cart is closed when navigating here
  React.useEffect(() => {
    setIsCartOpen(false);
  }, [setIsCartOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    // In a real app, you would clear the cart and process payment here
  };

  if (orderPlaced) {
    return (
      <main className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Thank You!</h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px' }}>Your order has been placed successfully.</p>
        <button className="button" onClick={() => navigate('/')}>Return Home</button>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="container section-padding" style={{ textAlign: 'center' }}>
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate('/shop')} className="btn-outline" style={{ marginTop: '20px' }}>Return to Shop</button>
      </main>
    );
  }

  return (
    <main className="container section-padding">
      <div className="checkout-split">
        <div className="checkout-form">
          <h2 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>Checkout</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '15px' }}>Contact Information</h3>
              <input required type="email" placeholder="Email" style={{ width: '100%', padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
            </div>
            
            <div>
              <h3 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '15px', marginTop: '20px' }}>Shipping Address</h3>
              <div className="form-grid-2">
                <input required type="text" placeholder="First Name" style={{ padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
                <input required type="text" placeholder="Last Name" style={{ padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
              </div>
              <input required type="text" placeholder="Address" style={{ width: '100%', padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px', marginBottom: '15px' }} />
              <div className="form-grid-3">
                <input required type="text" placeholder="City" style={{ padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
                <input required type="text" placeholder="State" style={{ padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
                <input required type="text" placeholder="ZIP Code" style={{ padding: '15px', border: '1px solid var(--gray)', borderRadius: '4px' }} />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '15px', marginTop: '20px' }}>Payment</h3>
              <div style={{ padding: '20px', border: '1px solid var(--gray)', borderRadius: '4px', background: 'var(--light-gray)' }}>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>This is a simulated checkout. No real payment is required.</p>
              </div>
            </div>

            <button type="submit" className="button" style={{ marginTop: '20px', width: '100%' }}>Complete Order</button>
          </form>
        </div>

        <div className="checkout-summary" style={{ background: 'var(--light-gray)', padding: '40px', borderRadius: '4px', height: 'fit-content' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>Order Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--black)', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>{item.quantity}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase' }}>{item.name}</h4>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--gray)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '18px', marginTop: '10px' }}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
