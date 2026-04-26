import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
        Order on WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
