import React from 'react';
import { motion } from 'motion/react';
import { PartyPopper, Users, Utensils, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const BirthdaySection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, main Alaska Cafe mein birthday party hall book karna chahta hoon. Please details aur availability share kar dein.")}`;

  const features = [
    { icon: Sparkles, text: 'Decor-friendly environment' },
    { icon: Users, text: 'Family seating' },
    { icon: Utensils, text: 'Food service included' },
    { icon: CheckCircle2, text: 'Clean & comfortable space' },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl luxury-border min-h-[600px] flex items-center">
        {/* Background Overlay Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/14051051/pexels-photo-14051051.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full lg:w-2/3 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold tracking-widest uppercase mb-4">
              <PartyPopper className="w-4 h-4" />
              Birthday Party Hall Available 🎉
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Celebrate Your <span className="luxury-text-gradient">Special Moments</span> With Us 🎂
            </h2>

            <p className="text-gray-300 text-lg max-w-xl">
              We offer a dedicated party hall for birthdays and small events. Enjoy a comfortable and beautifully arranged space for your celebrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-white/10">
              <div className="space-y-4">
                <h4 className="text-gold font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                   Features
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 group">
                      <feature.icon className="w-5 h-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-gold font-bold uppercase tracking-wider text-sm">
                   Pricing Details
                </h4>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-gold/20 p-4 rounded-xl">
                    <p className="text-gold font-bold text-lg">FREE Hall Booking</p>
                    <p className="text-gray-400 text-xs">on orders above Rs. 10,000</p>
                  </div>
                  <div className="p-4 border border-white/5 rounded-xl">
                    <p className="text-gray-200 font-bold">Hall charges Rs. 3,000</p>
                    <p className="text-gray-400 text-xs">If order is below Rs. 10,000 (for 2 hours)</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-gold/20 group"
            >
              Book Your Party on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySection;
