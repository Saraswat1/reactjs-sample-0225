import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1a3c89',
      padding: '10px 20px',
      color: 'white'
    }}>
      <h2>TasksBoard</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={user?.photoURL || `https://picsum.photos/40?random=${user?.uid}`}
          alt="Profile"
          style={{ width: 40, height: 40, borderRadius: '50%' }}
        />
        <button onClick={handleLogout} style={{
          backgroundColor: '#e53935',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
