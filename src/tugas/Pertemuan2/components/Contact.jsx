import React from 'react';

const Contact = ({ email, ig }) => {
  return (
    <div className="contact-info">
      <p>📧 {email}</p>
      <p>📸 Instagram: @{ig}</p>
    </div>
  );
};

export default Contact;