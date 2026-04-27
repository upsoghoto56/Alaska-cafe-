import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Pizza"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-gold/30">
                Premium Fast Food Experience
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-none mb-8"
            >
              Fresh Taste, <br />
              <span className="luxury-text-gradient">Fast Delivery.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            >
              Experience gourmet fast food at its finest. Premium flavors delivered fresh to your doorstep.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <Link
                  to="/menu"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-all w-full sm:w-auto"
                >
                  Explore Menu
                </Link>
              </motion.div>
              
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, main order karna chahta hoon Alaska Cafe Ghotki se.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Order on WhatsApp
              </motion.a>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                <Link
                  to="/deals"
                  className="bg-gold text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-gold-dark transition-all shadow-xl shadow-gold/20 group w-full sm:w-auto"
                >
                  🔥 View Deals
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-gray-500 text-xs uppercase tracking-[0.5em]">Scroll to discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
