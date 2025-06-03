import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/config";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const q = query(collection(db, "task"), where("userId", "==", user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const userTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(userTasks);
      });
      return () => unsubscribe();
    }
  }, []);

  const handleAdd = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user && title.trim()) {
      await addDoc(collection(db, "task"), {
        title,
        description: desc,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <input
          style={styles.input}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Task Description"
        />
        <button onClick={handleAdd} style={styles.button}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <strong>{task.title}</strong> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  taskItem: {
    background: "#f5f5f5",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
  },
};
