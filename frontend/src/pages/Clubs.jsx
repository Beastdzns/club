// Club.jsx (Updated)
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Clubs = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Tagline Section */}
        <section className="bg-blue-600 text-white text-center py-20 w-full">
          <h2 className="text-4xl font-bold mb-4">Join a Club That Aligns with Your Interests</h2>
          <p className="text-lg mb-6">
            Discover new passions and connect with like-minded individuals.
          </p>
          <Link to="/application">
            <a className="bg-yellow-500 text-gray-800 px-6 py-3 rounded hover:bg-yellow-400 text-lg font-semibold">
              Apply Now
            </a>
          </Link>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto p-10">
          <h3 className="text-3xl font-bold text-center mb-6">Benefits of Joining Clubs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Network & Connections</h4>
              <p className="text-gray-600">
                Meet new people who share your interests and build lasting friendships.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Skill Development</h4>
              <p className="text-gray-600">
                Participate in activities that enhance your skills and broaden your knowledge.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Leadership Opportunities</h4>
              <p className="text-gray-600">
                Take on leadership roles that help you grow personally and professionally.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Community Involvement</h4>
              <p className="text-gray-600">
                Get involved in community service and make a positive impact.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Fun & Enjoyment</h4>
              <p className="text-gray-600">
                Engage in fun activities that make your experience memorable.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Access to Resources</h4>
              <p className="text-gray-600">
                Gain access to tools, resources, and support for your personal growth.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clubs;
