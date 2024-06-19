// src/pages/Profile.js
import React from 'react';
import { awardTokens } from '../services/tokenServices';
import { auth } from '../firebase';

const Profile = () => {
  const handleAwardTokens = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await awardTokens(user.email, 100); // Award 100 tokens as an example
        console.log('Tokens awarded');
      } catch (error) {
        console.error('Error awarding tokens:', error);
      }
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleAwardTokens}>Award Tokens</button>
    </div>
  );
};

export default Profile;
