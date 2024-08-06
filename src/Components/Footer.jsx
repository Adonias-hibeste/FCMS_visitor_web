/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About the Club</h3>
            <p className="text-gray-400 mb-4">
              We are a football club dedicated to developing young talent and
              fostering a love for the sport in our community.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              Learn More
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              123 Main Street, Anytown USA
              <br />
              Phone: (555) 555-5555
              <br />
              Email: info@footballclub.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          &copy; 2023 Junior Football Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;