import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-300  py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
          <p>Your one-stop shop for quality products at unbeatable prices.</p>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">Customer Service</h3>
          <ul>
            <li><a href="/help" className="hover:text-white block mb-1">Help Center</a></li>
            <li><a href="/returns" className="hover:text-white block mb-1">Returns</a></li>
            <li><a href="/shipping" className="hover:text-white block mb-1">Shipping Info</a></li>
            <li><a href="/contact" className="hover:text-white block">Contact Us</a></li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white block mb-1">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white block mb-1">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white block">Instagram</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
