import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, History, Heart, ShieldCheck, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold luxury-text-gradient mb-6">Our Story</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          At Alaska Café & Fast Food Ghotki, we believe that every meal should be an experience. From our humble beginnings to becoming a destination for food lovers, our journey has been fueled by passion, quality, and a commitment to excellence.
        </p>
      </div>

      {/* Story Sections */}
      <div className="space-y-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" 
              alt="Our Kitchen"
              className="relative z-10 rounded-3xl luxury-border w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 text-gold mb-6">
              <History className="w-6 h-6" />
              <span className="text-sm font-bold tracking-widest uppercase">The Beginning</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">A Passion for Taste</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Founded with the vision of bringing premium international flavors to our local community, Alaska Café started as a small kitchen with a big dream. We wanted to redefine fast food by combining speed with high-quality ingredients and artisanal techniques.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every recipe in our menu has been carefully crafted and tested to ensure it meets our high standards of taste and quality. We don't just serve food; we serve memories.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80" 
              alt="Our Chef"
              className="relative z-10 rounded-3xl luxury-border w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 text-gold mb-6">
              <ChefHat className="w-6 h-6" />
              <span className="text-sm font-bold tracking-widest uppercase">Our Commitment</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Quality Without Compromise</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We source our ingredients from the most trusted suppliers, ensuring that every vegetable is fresh, every meat is premium, and every spice is authentic. Our kitchen follows strict hygiene protocols to guarantee your safety and satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Hygienic</h4>
                  <p className="text-gray-500 text-sm">Cleanliness is our top priority.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Fresh</h4>
                  <p className="text-gray-500 text-sm">Made to order, every time.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="mt-40 py-20 bg-white/5 rounded-3xl luxury-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: Users, label: 'Happy Customers', value: '10K+' },
            { icon: Award, label: 'Awards Won', value: '15+' },
            { icon: ChefHat, label: 'Expert Chefs', value: '12+' },
            { icon: Heart, label: 'Menu Items', value: '100+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-3xl font-serif font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
