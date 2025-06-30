import React from 'react';

const Profile = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      {username ? (
        <p>Welcome, <strong>{username}</strong> 🎉</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
