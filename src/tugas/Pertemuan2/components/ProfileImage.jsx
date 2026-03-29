import React from 'react';

const ProfileImage = ({ imageUrl }) => {
  return (
    <div className="profile-pic-container">
      <div className="profile-pic-frame">
        {/* Foto Profil Kamu */}
        <img 
          src={imageUrl} 
          alt="Arini Zahira Putri" 
          className="profile-pic" 
        />
      </div>
    </div>
  );
};

export default ProfileImage;