import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto">
            <h3 className="text-xl">&copy; 2024 CostarAI. All rights reserved.</h3>
            <div className="mt-4">
                <a href="#" className="footer-social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="footer-social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="footer-social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;