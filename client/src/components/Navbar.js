import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80" viewBox="0 0 400 100">
                    <text x="0" y="60" className="logo-text animate__animated animate__fadeIn"
                        font-family="Arial, sans-serif" font-size="50" fill="#FFFFFF" font-weight="bold">Costar</text>
                    <text x="170" y="60" className="logo-text animate__animated animate__fadeIn"
                        font-family="Arial, sans-serif" font-size="50" fill="#fac70b" font-weight="bold">AI</text>
                    <animate attributeName="opacity" dur="1s" values="0;1" repeatCount="1"></animate>
                </svg>
            </div>
            <div className="flex items-center space-x-4">
                <a href="overview.html" className="nav-link">Overview</a>
                <a href="about.html" className="nav-link">About</a>
                <a href="product.html" className="nav-link">Product</a>
                <a href="signup.html" className="nav-link">Sign Up</a>
                <a href="login.html" className="nav-link">Login</a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;