import React, { useEffect } from "react";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/"); // Redirect to homepage if logged out
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    // After signOut, onAuthStateChanged will redirect automatically
  };

  return (
    <div>
      <h2 style={styles.header}>Your Tasks</h2>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Go To homepage
      </button>
      <TaskBoard />
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    margin: "30px 0",
    fontSize: "24px",
  },
  logoutButton: {
    display: "block",
    margin: "10px auto 30px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
