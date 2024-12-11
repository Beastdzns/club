import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Club Management</h1>
        <div className="flex space-x-4">
          <Link to="/clubs" className="text-gray-300 hover:text-white">Clubs</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
