import React from "react";

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/minilogo-accservice.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    const modalRef = useRef(null);

    // Close modal if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false); // Close the modal
            }
        }

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    // New function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const companyName = document.getElementById('companyName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Send the email using EmailJS
        window.emailjs.send('service_vwf504h', 'template_8pn6qji', {
            companyName,
            email,
            phone,
            message,
        })
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Email sent successfully!');
                setIsModalOpen(false); // Close the modal after sending
            })
            .catch((error) => {
                console.error('Failed to send email. Please try again.', error);
                alert('Failed to send email. Please try again.');
            });
    };
    useEffect(() => {
        window.emailjs.init("iM9g2J4x_uoPANV_j"); // Replace with your EmailJS user ID
    }, []);
    return (
        <>
            {/* Fixed Background - Pure decorative element */}
            <div
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '72px',
                    backgroundColor: '#2D2862 ', // red-600
                    zIndex: 40,
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            />

            {/* Interactive Header */}
            <header className={`fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center 
            transition-all duration-300 backdrop-brightness-[.85]
          backdrop-blur bg-gradient-to-b from-[#2D2862] to-transparent to-100%}`}>
                <div className="opacity: 1; transform: none;">
                    <a className="logo flex items-center gap-2 text-white no-underline "
                        href="/"><img src={Logo} alt="company logo"
                            width="40" height="40" className="rounded-xl" />
                        <h1 className="font-bold my-auto">aservice</h1>
                    </a>
                </div>
                {/* Desktop Navigation - Now centered */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                    <Link
                        to="/"
                        className={`text-white hover:text-white/90  border-b-2 transition-all ${isActivePath('/') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'}`}
                    >
                        მთავარი
                    </Link>
                    <Link
                        to="/about"
                        className={`text-white hover:text-white/90  border-b-2 transition-all ${isActivePath('/about') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'}`}
                    >
                        ჩვენს შესახებ
                    </Link>
                    <Link
                        to="/why"
                        className={`text-white hover:text-white/90  border-b-2 transition-all ${isActivePath('/why') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'}`}
                    >
                        რატომ გჭირდებით
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Sign In Button - Now in its own container */}
                    <button
                        className="hidden
                     md:block  px-6 py-2 
                     transition-all
                     hover:-translate-y-0.5
                      hover:bg-orange-500
                     text-white
                     rounded-3xl
                     border-2 border-orange-500
                     "
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        მოგვწერე
                    </button>

                    {/* Burger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`text-orange-500 p-2 rounded-md md:hidden ${isMenuOpen ? 'hidden' : 'md:hidden'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <div
                                className="fixed inset-0 opacity-30"
                                onClick={() => setIsMenuOpen(false)}
                            ></div>

                            {/* Side Menu */}
                            <div
                                className="
        absolute top-0 right-0
        bg-black/50
        h-screen w-1/2
        shadow-lg py-2
        md:hidden
        flex flex-col justify-start
      "
                            >
                                {/* Top bar with close button */}
                                <div className="flex flex-row-reverse ">
                                    {/* Close button in top-right corner */}
                                    <div className="flex flex-row-reverse px-4 py-2">
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-start px-4 py-2 ">
                                        <button
                                            className="
            px-2 py-2
            font-semibold transition-all
            hover:bg-orange-500
            text-white
            rounded-3xl
            border-2 border-orange-500
          "
                                            onClick={() => setIsModalOpen(!isModalOpen)}
                                        >
                                            მოგვწერე
                                        </button>
                                    </div>
                                </div>

                                {/* Menu Links */}
                                <div className="flex flex-col items-center  px-4 pt-6">
                                    <Link
                                        to="/"
                                        className={`block w-full text-white py-2  border-b-2 ${isActivePath('/') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'
                                            }`}
                                    >

                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                        >მთავარი</button>
                                    </Link>
                                    <Link
                                        to="/about"
                                        className={`block w-full text-white  py-2  border-b-2 ${isActivePath('/about') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                        >ჩვენს შესახებ</button>
                                    </Link>
                                    <Link
                                        to="/why"
                                        className={`block w-full text-white  py-2  border-b-2 ${isActivePath('/why') ? 'border-[#fe6d46]' : 'border-transparent hover:border-[#fe6d46]'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                        >      რატომ გჭირდებით</button>

                                    </Link>
                                </div>
                            </div>
                        </>
                    )}


                    {isModalOpen && (
                        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black bg-opacity-50">
                            <div className="mt-24 justify-content-center align-items-center text-center text-black">
                                {/* Modal content */}
                                <div ref={modalRef} className="space-y-2 bg-white inline-block text-center p-6 rounded-lg">
                                    <h6 className="font-semibold mb-12 font-roboto border-b-[1px] border-b-gray-200 w-32 mx-auto text-lg sm:text-xl">
                                        კონტაქტი
                                    </h6>
                                    {/* New Input Fields */}
                                    <input type="text" placeholder="კომპანიის სახელი" className="border p-2 mb-2 w-full" id="companyName" />
                                    <input type="email" placeholder="მეილი" className="border p-2 mb-2 w-full" id="email" required />
                                    <input type="text" placeholder="ნომერი" className="border p-2 mb-2 w-full" id="phone" />
                                    <textarea placeholder="ტექსტი" className="border p-2 mb-2 w-full" rows="4" id="message"></textarea>
                                    <button
                                        className="flex gap-5 border-solid border-[#2d2862] border rounded-lg bg-white py-2 p-1 mx-auto hover:-translate-y-1 hover:shadow-md hover:shadow-gray-300 hover:bg-[#2d286215] duration-200 text-sm sm:text-lg"
                                        onClick={handleSubmit}
                                    >
                                        <span className="font-roboto w-60 sm:w-72">
                                            გამოგზავნა
                                        </span>
                                    </button>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </header>
        </>
    );
}

export default Header;