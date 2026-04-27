import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ChevronDown, Utensils, Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const isVariantPrice = typeof item.price === 'object';
  const variants = isVariantPrice ? Object.keys(item.price as object) : [];
  const [selectedVariant, setSelectedVariant] = useState(variants[0] || '');
  const { addToCart } = useCart();

  const currentPrice = isVariantPrice 
    ? (item.price as { [key: string]: number })[selectedVariant] 
    : item.price as number;

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: currentPrice,
      quantity: 1,
      variant: selectedVariant || undefined,
      image: item.image
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-[#111111] rounded-2xl overflow-hidden luxury-border flex flex-col h-full shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-black flex-shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gold/30 bg-white/5 group-hover:bg-white/10 transition-colors">
            <Utensils className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">Image Coming Soon</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        {item.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Chef's Special
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 text-center bg-gradient-to-b from-transparent to-black/20">
        <h3 className="text-xl font-sans font-bold text-white group-hover:text-gold transition-colors mb-1">
          {item.name}
        </h3>
        
        {item.description && (
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}

        <div className="mt-auto space-y-4 pt-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl font-sans font-bold text-gold">
              Rs. {currentPrice}
            </span>
            {isVariantPrice && (
              <div className="relative inline-block mt-1">
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="bg-transparent text-gray-300 text-xs uppercase tracking-wider font-semibold appearance-none pr-6 focus:outline-none cursor-pointer hover:text-white transition-colors"
                >
                  {variants.map((v) => (
                    <option key={v} value={v} className="bg-[#1A1A1A] text-white">
                      {v}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-gold pointer-events-none" />
              </div>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-full transition-all flex items-center justify-center gap-2 group/btn font-bold text-sm uppercase tracking-widest mt-4 shadow-lg shadow-gold/10"
          >
            <Plus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
