import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaStar } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">About <span className="text-red-600
            text-sm">NEXASTREAM</span></h3>
            <p className="text-gray-400">
              Experience the world of cinema like never before! Watch blockbusters, classic films, and trending shows anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Movies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">TV Shows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Popular Actors */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Popular Actors</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Leonardo DiCaprio</li>
              <li className="text-gray-400">Scarlett Johansson</li>
              <li className="text-gray-400">Tom Cruise</li>
              <li className="text-gray-400">Zendaya</li>
            </ul>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Top Rated</h3>
            <p className="flex items-center text-gray-400">
              Inception  4.9
            </p>
            <p className="flex items-center text-gray-400">
              The Dark Knight 4.8
            </p>
            <p className="flex items-center text-gray-400">
              Avengers  4.7
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-2 text-white">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with the latest movie releases and news.</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l text-gray-400 w-1/2 border border-gray-300
            outline-none" />
            <button className="bg-red-600 px-4 py-2 rounded-r hover:bg-red-500 ml-3">Subscribe</button>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={30} /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; 2025 Nexastream. All Rights Reserved.</p>
          <p className="text-gray-400">Created by <span className="font-bold text-white">Hooria Kashif</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;