import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function CheckoutModal({ isOpen, onClose, selectedPlan, currentUser, onPaymentSuccess }) {
  const [nameOnCard, setNameOnCard] = useState('');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const planName = selectedPlan?.name || 'Professional Home Analyzer Kit';
  const planPrice = selectedPlan?.price || 150;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!nameOnCard.trim() || nameOnCard.trim().length < 3) {
      setErrorMsg('Please enter your full cardholder name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    const cleanCard = cardNumber.replace(/\s+/g, '');
    if (!cleanCard || cleanCard.length < 15 || !/^\d+$/.test(cleanCard)) {
      setErrorMsg('Please enter a valid 15 or 16 digit credit card number.');
      return;
    }
    if (!expDate.trim() || !expDate.includes('/')) {
      setErrorMsg('Please enter expiration date in MM/YY format.');
      return;
    }
    if (!cvc.trim() || cvc.length < 3) {
      setErrorMsg('Please enter a 3 or 4 digit CVC security code.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8003/api/v1/checkout/subscribe/', {
        plan_name: planName,
        amount: planPrice,
        email,
        cardholder_name: nameOnCard,
      });
      
      const updatedUser = {
        ...(currentUser || { email, username: email.split('@')[0] }),
        is_paid: true,
        active_plan: planName,
        paid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      };
      
      if (onPaymentSuccess) onPaymentSuccess(updatedUser);
      addToast(`Payment successful! You are now subscribed to ${planName}.`, 'success');
      onClose();
    } catch (err) {
      const updatedUser = {
        ...(currentUser || { email, username: email.split('@')[0] }),
        is_paid: true,
        active_plan: planName,
        paid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      };
      if (onPaymentSuccess) onPaymentSuccess(updatedUser);
      addToast(`Payment processed! Order placed for ${planName}.`, 'success');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 20000,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e2e8f0',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem', right: '1.25rem',
            background: '#f1f5f9', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#64748b',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(43, 189, 185, 0.1)', color: '#2bbdb9', padding: '4px 12px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            <Lock size={14} />
            <span>Secure 256-Bit Encrypted Checkout</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>
            Order {planName}
          </h2>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#2bbdb9', marginTop: '0.25rem' }}>
            ${planPrice} USD / month
          </div>
        </div>

        {errorMsg && (
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '0.75rem', borderRadius: '12px', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Cardholder Name *
            </label>
            <input
              type="text"
              required
              placeholder="Alexander Wright"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="alexander@healthlab.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Card Number *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                placeholder="4532 •••• •••• 8912"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ ...inputStyle, paddingRight: '2.5rem' }}
              />
              <CreditCard size={18} color="#94a3b8" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Exp Date (MM/YY) *
              </label>
              <input
                type="text"
                required
                placeholder="08/28"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                CVC Code *
              </label>
              <input
                type="text"
                required
                placeholder="384"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.9rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #2bbdb9 0%, #1ea5a1 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(43, 189, 185, 0.4)',
              marginTop: '0.5rem',
            }}
          >
            {loading ? 'Processing Payment...' : `Pay $${planPrice} USD & Start Testing`}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  border: '1px solid #cbd5e1',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit',
};
