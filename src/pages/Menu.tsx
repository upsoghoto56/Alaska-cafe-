import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import MenuItem from '../components/MenuItem';
import { Search, SlidersHorizontal } from 'lucide-react';

const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold luxury-text-gradient mb-6">Our Menu</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore our wide range of premium fast food, from signature pizzas to juicy burgers and authentic shawarmas.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for your favorite dish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSearchParams({ category: 'all' })}
            className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
              activeCategory === 'all' 
                ? 'bg-gold text-white shadow-lg shadow-gold/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            All Items
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.id })}
              className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id 
                  ? 'bg-gold text-white shadow-lg shadow-gold/20' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <MenuItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl italic">No items found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
