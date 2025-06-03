// src/pages/Profile.js
import React, { useEffect, useState } from 'react';

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/id/${randomId}/info`)
      .then(res => res.json())
      .then(data => setProfileImage(data.download_url))
      .catch(() => setProfileImage(null));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Your Profile</h2>
      {profileImage ? (
        <img src={profileImage} alt="Profile" style={styles.image} />
      ) : (
        <p>Loading profile image...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '60px',
    textAlign: 'center'
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    objectFit: 'cover',
    marginTop: '20px'
  }
};
