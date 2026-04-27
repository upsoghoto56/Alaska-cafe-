import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Pizza } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center">
                <Pizza className="text-black w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold luxury-text-gradient tracking-tighter">ALASKA</span>
                <span className="text-[10px] tracking-[0.3em] font-medium text-gold uppercase -mt-1">Café & Fast Food Ghotki</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Experience the luxury of premium fast food. We bring international flavors and artisanal quality to your table with every order.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Deals', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-500 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Defence Shopping Mall, Devery Road, Ghotki</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>0301 3109603</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@alaskacafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Mon - Thu:</span>
                <span className="text-white">12:00 PM - 01:00 AM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Fri - Sun:</span>
                <span className="text-white">12:00 PM - 02:00 AM</span>
              </li>
              <li className="pt-4">
                <span className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Open for Delivery
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Alaska Café & Fast Food Ghotki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
