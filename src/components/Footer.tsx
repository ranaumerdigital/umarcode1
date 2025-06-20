import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-primary-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">UmarCode</span>
            </div>
            <p className="text-gray-400 text-sm">
              Engineering Future Technologies. We craft cutting-edge digital solutions designed to drive your business forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Custom Software Development</span></li>
              <li><span className="text-gray-400 text-sm">Web & Mobile Apps</span></li>
              <li><span className="text-gray-400 text-sm">AI & Machine Learning</span></li>
              <li><span className="text-gray-400 text-sm">Cloud Solutions</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Flex Space 3, Baghar Wala, Chowki Masti, Kahror Pacca, Lodhran 59340
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <a href="mailto:contact@umarcode.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  contact@umarcode.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <a href="tel:+923255709047" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  +92 325 5709047
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 UmarCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;