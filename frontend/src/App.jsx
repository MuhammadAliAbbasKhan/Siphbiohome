import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { ToastNotification } from './components/ToastNotification';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { QuizModal } from './components/QuizModal';
import { CheckoutModal } from './components/CheckoutModal';

// Pages
import HomePage from './pages/HomePage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('siphbiohome_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {}
    }
  }, []);

  const handlePaymentSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem('siphbiohome_user', JSON.stringify(user));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Header 
        onOpenQuiz={() => setQuizOpen(true)}
        onStartTesting={() => setCheckoutOpen(true)}
      />

      {/* Spacer to prevent text bleeding under fixed floating header */}
      <div style={{ height: '85px' }} />

      {/* Main Content & Routes */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/faq" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/science" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/company" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/assays" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/pricing" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/contact-us" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
          <Route path="/news" element={<HomePage onOpenQuiz={() => setQuizOpen(true)} onStartTesting={() => setCheckoutOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Modals */}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onStartTesting={() => setCheckoutOpen(true)}
      />
      
      <CheckoutModal 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
        selectedPlan={selectedPlan}
        currentUser={currentUser}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <ToastNotification />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </Router>
  );
}
