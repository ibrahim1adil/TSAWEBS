import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PopupMenu = ({ isOpen, onClose }) => (
  isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        style={{
          background: '#f5f5dc',
          color: '#5a5a5a',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '80%',
          maxWidth: '400px',
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: '#8b4513',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            float: 'right',
          }}
        >
          ✖ Close
        </button>
        <h3>Navigate</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/" style={{ color: '#3e2723', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/menu" style={{ color: '#3e2723', textDecoration: 'none' }}>Menu</Link></li>
          <li><Link to="/about" style={{ color: '#3e2723', textDecoration: 'none' }}>About</Link></li>
        </ul>
      </motion.div>
    </motion.div>
  )
);

export default PopupMenu;
