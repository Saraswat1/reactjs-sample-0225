import React, { useState } from 'react';

export default function AddTaskModal({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title && description) {
      onAddTask(title, description);
      alert(`Task Added: ${title}`);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>Add Task</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    justifyContent: 'center'
  },
  input: {
    padding: '10px',
    fontSize: '14px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};
