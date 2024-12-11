import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { skillsByDomain } from '../skills';
import axios from 'axios'; // Import axios for making API requests

const Application = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        skills: [],
        prn: '',
        email: '',
        club: '',
        domain: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    // Hardcoded data for clubs and domains
    const clubs = ['Coding Club', 'Art Club', 'Sports Club', 'Music Club', 'Debate Club'];
    const domains = ['Computer Science', 'Arts', 'Commerce', 'Engineering'];

    const handleChange = (e) => {
        const { name, value, type, selectedOptions } = e.target;
        if (type === 'select-multiple') {
            const selectedValues = Array.from(selectedOptions).map(option => option.value);
            setFormData(prevState => ({
                ...prevState,
                [name]: selectedValues,
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSkillChange = (skill) => {
        setFormData((prevState) => {
            const skills = prevState.skills.includes(skill)
                ? prevState.skills.filter((s) => s !== skill)
                : [...prevState.skills, skill];
            return { ...prevState, skills };
        });
    };

    const validateEmail = (email) => {
        return email.endsWith('@viit.ac.in');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setError('Email must be from the domain viit.ac.in');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/applications', formData); // POST request to your API endpoint
            setSuccessMessage(response.data.message); // Set success message from response
            setFormData({ // Clear the form fields after submission
                name: '',
                phone: '',
                skills: [],
                prn: '',
                email: '',
                club: '',
                domain: '',
            });
            setError(''); // Clear any previous errors
        } catch (error) {
            setError(error.response?.data?.message || 'Error submitting application'); // Handle any errors from the server
            setSuccessMessage(''); // Clear success message on error
        }
    };

    return (
        <div>
            <Navbar />
            <main className="bg-gray-100 min-h-screen flex flex-col items-center p-10">
                <h2 className="text-4xl font-bold mb-4">Application Form</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Please fill out the form below to apply for membership.
                </p>
                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error messages */}
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>} {/* Display success messages */}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* PRN */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prn">
                            PRN (8-digit Number)
                        </label>
                        <input
                            type="text"
                            id="prn"
                            name="prn"
                            maxLength={8}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your PRN"
                            value={formData.prn}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Club Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="club">
                            Club
                        </label>
                        <select
                            id="club"
                            name="club"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.club}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a Club</option>
                            {clubs.map((club) => (
                                <option key={club} value={club}>{club}</option>
                            ))}
                        </select>
                    </div>

                    {/* Domain Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
                            Domain
                        </label>
                        <select
                            id="domain"
                            name="domain"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.domain}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a Domain</option>
                            {domains.map((domain) => (
                                <option key={domain} value={domain}>{domain}</option>
                            ))}
                        </select>
                    </div>

                    {/* Skills - Checkboxes */}
                    {formData.domain && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Skills
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {skillsByDomain[formData.domain]?.map((skill) => (
                                    <label key={skill} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={skill}
                                            checked={formData.skills.includes(skill)}
                                            onChange={() => handleSkillChange(skill)}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700">{skill}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Application;
