import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Contact";
  }, []);

  return (
    <div>Contact</div>
  );
};

export default Contact;