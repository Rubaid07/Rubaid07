import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 text-sm">
                            Copyright © {new Date().getFullYear()} - All rights reserved by 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-medium ml-1">
                                Rubaid Islam
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;