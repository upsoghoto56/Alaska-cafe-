import React from 'react';
import { motion } from 'motion/react';
import { DEALS, WHATSAPP_NUMBER } from '../constants';
import { Tag, ShoppingCart, MessageCircle } from 'lucide-react';

const DealsSection: React.FC = () => {
  return (
    <section id="deals" className="container mx-auto px-4 scroll-mt-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold tracking-widest uppercase mb-4"
        >
          <Tag className="w-4 h-4" />
          Hot Deals 🔥
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Best value combos for you</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Savor our premium flavor combinations at prices you'll love. Perfect for sharing with friends and family.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DEALS.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all luxury-border"
          >
            {/* Deal Image */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img 
                src={deal.image || 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800'} 
                alt={deal.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-gold text-white font-bold px-4 py-2 rounded-full shadow-lg">
                Rs. {deal.price}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{deal.name}</h3>
              
              <div className="space-y-2 mb-8">
                {deal.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, main ${deal.name} order karna chahta hoon. Details confirm kar dein.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-gold/20 group/btn"
              >
                <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
