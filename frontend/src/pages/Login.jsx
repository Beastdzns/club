import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Simulate successful login (you can replace this with actual validation logic)
    if (email === 'user@example.com' && password === 'password123') {
      setErrorMessage('');
      alert('Login successful!');
      // Perform further actions after login, e.g., redirecting to another page
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        <a href="#" className="block text-center text-sm text-gray-600 mt-4 hover:underline">
          Forgot Password?
        </a>

        {errorMessage && (
          <div className="mt-4 text-red-500 text-center text-sm">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
