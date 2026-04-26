import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import BirthdaySection from '../components/BirthdaySection';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, Truck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      {/* Trust Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Star, title: 'Premium Quality', desc: 'We use only the finest ingredients for our dishes.' },
            { icon: ShieldCheck, title: 'Hygienic Kitchen', desc: 'Strict hygiene standards in every preparation.' },
            { icon: Clock, title: 'Fast Service', desc: 'Your food is prepared fresh and served hot.' },
            { icon: Truck, title: 'Quick Delivery', desc: 'Fast delivery to your doorstep via WhatsApp.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl text-center luxury-border"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-black/50 py-20 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">Explore Our Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORIES.slice(0, 6).map((cat, index) => (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.id}`}
                className="group flex flex-col items-center gap-4 p-6 glass-morphism rounded-2xl luxury-border min-w-[140px] hover:bg-gold/5 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <span className="text-sm font-medium uppercase tracking-widest">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Party Hall Section */}
      <BirthdaySection />

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl luxury-gradient p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=40')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Hungry? Order Now!</h2>
            <p className="text-white/80 text-lg mb-10">Experience the luxury of premium fast food delivered straight to your heart. One click away on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">
                Explore Menu
              </Link>
              <a 
                href={`https://wa.me/923013109603`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold-dark transition-all"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
