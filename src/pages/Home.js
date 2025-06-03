// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Task Board</h1>
      <p>Your personal space to manage tasks efficiently.</p>
      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '80px',
    textAlign: 'center',
    padding: '20px',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  }
};
