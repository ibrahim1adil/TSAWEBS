import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PopupMenu from './components/PopupMenu';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}>
        <Header />
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            background: '#8b4513',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '20px auto',
            display: 'block',
          }}
        >
          ☰ Open Menu
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <PopupMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
