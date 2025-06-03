import React from 'react';

export default function TaskCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  }
};