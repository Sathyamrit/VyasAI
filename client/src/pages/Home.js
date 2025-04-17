import React from "react";
import { Link } from "react-router-dom";  
import "./Home.css";

const Home = () => {
  return (
    <div className="font-sans">
    {/* <!-- Header section --> */}
    <header className="bg-gray-200 py-16 text-center animate__animated animate__fadeInUp">
        <div className="container mx-auto">
            <h1 className="text-7xl font-bold mb-4 colorful-heading">Welcome to CostarAI</h1>
            <p className="text-2xl font-bold mb-4">Empowering Collaboration with AI</p>
            <p className="text-lg italic text-sm">Revolutionize the Way You Work Together</p>
            <a href="trynow.html" className="cta-btn">Try now</a>
            <img src="https://assets-global.website-files.com/6215d56ae85caa0a3026a433/629df7d448d2b5d7ca8b445e_qualiry-tts.webp"
                alt="" className="responsive-image-center" />
        </div>

        {/* <!-- Additional Features --> */}
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <span className="feature-icon text-6xl">&#128187;</span>
                    <h2 className="text-xl font-bold mb-2">Smart Collaboration</h2>
                    <p>Facilitate seamless teamwork with AI-driven project management and communication tools.</p>
                </div>
                <div className="text-center">
                    <span className="feature-icon text-6xl">&#128172;</span>
                    <h2 className="text-xl font-bold mb-2">Integration</h2>
                    <p>Enhance communication with AI-driven chatbots, providing instant responses and intelligent assistance.</p>
                </div>
                <div className="text-center">
                    <span className="feature-icon text-6xl">&#128247;</span>
                    <h2 className="text-xl font-bold mb-2">Visual Storytelling</h2>
                    <p>Create compelling narratives using AI-generated visuals and multimedia content.</p>
                </div>
            </div>
        </div>
    </header>

    {/* <!-- Collaboration Section --> */}
    <section className="bg-gray-200 py-16 animate__animated animate__fadeInUp">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center animate__animated animate__fadeInLeft">
                <h2 className="text-3xl font-bold mb-4">Collaborate with Friends</h2>
                <p className="mb-4">Bring your social network into the world of artificial intelligence and collaboration.</p>
                <ul className="text-left">
                    <li><strong>Generate Ideas:</strong> Stimulate creativity by generating images and concepts.</li>
                    <li><strong>Brainstorm:</strong> Utilize AI to facilitate brainstorming sessions and enhance ideation.</li>
                    <li><strong>AI Collaboration:</strong> Work alongside AI systems to boost productivity and innovation.</li>
                </ul>
            </div>
            <div className="animate__animated animate__fadeInRight">
                <h2 className="text-3xl font-bold mb-8">Unlock the Power of Teamwork</h2>
                <p className="mb-4">Experience the beta v1 version of our platform completely free of charge.</p>
                <p className="mb-4">Embark on a journey of unparalleled collaboration and teamwork with your friends and colleagues.</p>
                <form className="mb-4">
                    <input type="text" placeholder="Your Name" className="form-input" required />
                    <input type="email" placeholder="Your Email" className="form-input" required />
                    <button type="submit" className="cta-btn">Contact Now</button>
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" crossorigin="anonymous"></script>
</div>
  );
};

export default Home;