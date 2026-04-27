import React from 'react';
import { motion } from 'motion/react';
import { DEALS } from '../constants';
import { Tag, ShoppingCart, CheckCircle2, Utensils, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Deals: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (deal: any) => {
    addToCart({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      quantity: 1,
      image: deal.image
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-6">
          <Tag className="w-4 h-4" />
          <span className="text-sm font-bold tracking-widest uppercase">Limited Time Offers</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold luxury-text-gradient mb-6">Exclusive Deals</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Grab our specially curated bundles designed to give you the best value and the most delicious combinations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {DEALS.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#111111] rounded-3xl overflow-hidden luxury-border flex flex-col md:flex-row shadow-xl"
          >
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-black flex-shrink-0">
              {deal.image ? (
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gold/30 bg-white/5 group-hover:bg-white/10 transition-colors py-10">
                  <Utensils className="w-16 h-16 mb-4 opacity-50" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500">Bundle Offer</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gold text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Best Value
                </span>
              </div>
            </div>

            <div className="md:w-3/5 p-8 flex flex-col justify-between bg-gradient-to-l md:bg-gradient-to-t from-transparent to-black/20">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6 group-hover:text-gold transition-colors">{deal.name}</h3>
                <ul className="space-y-3 mb-8">
                  {deal.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Total Price</p>
                  <p className="text-3xl font-serif font-bold text-gold">Rs. {deal.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(deal)}
                  className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gold hover:text-white transition-all shadow-lg group/btn"
                >
                  <Plus className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Deal CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-12 rounded-3xl border border-dashed border-gold/30 bg-[#111111]/50 text-center luxury-border"
      >
        <h3 className="text-2xl font-serif font-bold text-white mb-4">Want a custom deal?</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">Tell us what you want and we'll create a special package just for you and your friends.</p>
        <a
          href={`https://wa.me/923013109603?text=${encodeURIComponent("I want to create a custom deal with my favorite items.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold/10 text-gold px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-black transition-all"
        >
          Message us on WhatsApp <ShoppingCart className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default Deals;
