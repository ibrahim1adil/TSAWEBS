import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ backgroundColor: '#8b4513', color: '#fff', padding: '20px', textAlign: 'center' }}>
    <h1>Peachy Cafe</h1>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/menu" style={{ color: '#fff', textDecoration: 'none' }}>Menu</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
