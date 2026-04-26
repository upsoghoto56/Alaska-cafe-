import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart, Pizza } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Pizza className="text-black w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold luxury-text-gradient tracking-tighter">ALASKA</span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-gold uppercase -mt-1">Café & Fast Food</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gold-dark transition-all shadow-lg shadow-gold/20"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-serif font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 mt-4"
              >
                <Phone className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
