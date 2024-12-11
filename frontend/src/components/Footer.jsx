import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">© {new Date().getFullYear()} Club Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
