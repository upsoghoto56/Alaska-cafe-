import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold luxury-text-gradient mb-6">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a question, feedback, or a large order? We're here to help. Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-3xl luxury-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-white font-bold">Call Us</h4>
                <p className="text-gray-400 text-sm">Direct line for inquiries</p>
              </div>
            </div>
            <p className="text-2xl font-serif font-bold text-white">0301 3109603</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-morphism p-8 rounded-3xl luxury-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-white font-bold">WhatsApp</h4>
                <p className="text-gray-400 text-sm">Instant ordering & support</p>
              </div>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-serif font-bold text-gold hover:text-gold-light transition-colors"
            >
              Message Now
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-morphism p-8 rounded-3xl luxury-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-white font-bold">Opening Hours</h4>
                <p className="text-gray-400 text-sm">When we are serving</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Mon - Thu:</span>
                <span className="text-white font-medium">12:00 PM - 01:00 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Fri - Sun:</span>
                <span className="text-white font-medium">12:00 PM - 02:00 AM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-morphism p-10 md:p-12 rounded-3xl luxury-border"
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-8">Send us a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="Your message here..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-gold text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gold-dark transition-all shadow-lg shadow-gold/20">
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Placeholder */}
      <section className="mt-20 h-[400px] rounded-3xl overflow-hidden luxury-border relative">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
            <p className="text-white font-serif text-xl font-bold mb-2">Alaska Café & Fast Food Ghotki</p>
            <p className="text-gray-400">Defence Shopping Mall, Devery Road, Ghotki</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
      </section>
    </div>
  );
};

export default Contact;
