import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
      <div>
        <Navbar />
        <main className="bg-gray-100 min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="bg-blue-600 text-white text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Club Management System!</h2>
            <p className="text-lg mb-6">
              Streamline your club activities and enhance member engagement effortlessly.
            </p>
            <a href="#join" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400">
              Join Now
            </a>
          </section>
  
          {/* Features Section */}
          <section id="features" className="container mx-auto p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Features That Empower Clubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Member Management</h4>
                <p className="text-gray-600">
                  Effortlessly manage club members with our intuitive interface. Track attendance, engagement, and membership status.
                </p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Event Scheduling</h4>
                <p className="text-gray-600">
                  Plan and organize events with ease. Send out notifications and manage RSVPs directly through our platform.
                </p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Financial Tracking</h4>
                <p className="text-gray-600">
                  Keep track of club finances with detailed reports and budget management tools. Ensure transparency and accountability.
                </p>
              </div>
            </div>
          </section>
  
          {/* How It Works Section */}
          <section id="how-it-works" className="bg-white p-10">
            <h3 className="text-3xl font-bold mb-4 text-center">How Our System Helps Clubs</h3>
            <p className="text-lg text-gray-600 text-center mb-6">
              Our club management system is designed to streamline your club's operations, enhance member engagement, and facilitate better communication.
            </p>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Simplified Communication</h4>
                <p className="text-gray-600">
                  Keep everyone in the loop with easy-to-use messaging and notification features.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Enhanced Engagement</h4>
                <p className="text-gray-600">
                  Foster a sense of community by promoting events, activities, and achievements.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Data-Driven Insights</h4>
                <p className="text-gray-600">
                  Analyze member participation and feedback to improve future activities and events.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Flexible Management Tools</h4>
                <p className="text-gray-600">
                  Use our customizable tools to fit the unique needs of your club.
                </p>
              </div>
            </div>
          </section>
  
          {/* Join Section */}
          <section id="join" className="container mx-auto text-center p-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Become a part of our vibrant community and take your club to the next level!
            </p>
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Sign Up Now
            </a>
          </section>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Home;