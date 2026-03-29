import React from 'react';

const SocialLink = ({ github, linkedin }) => {
  return (
    <div className="sosmed-list">
      <a href={github} target="_blank" className="link-cute">My GitHub 💻</a>
      <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" className="link-cute">LinkedIn Profile 🔗</a>
    </div>
  );
};

export default SocialLink;