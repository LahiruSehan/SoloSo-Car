
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/94701999999?text=Hello%20SOLO-SO%20Car%20Sale!%20I%20saw%20your%20website%20and%20want%20to%20inquire%20about%20a%20vehicle.', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="heartbeat bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
    </motion.button>
  );
};

export default WhatsAppButton;
