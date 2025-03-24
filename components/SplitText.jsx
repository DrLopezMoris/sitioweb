import React from 'react';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const SplitText = ({ text = "Dr. CARLOS LÓPEZ MORIS" }) => {
  // Separa el texto en caracteres
  const letters = text.split('');

  return (
    <h1 className={`${montserrat.className} uppercase text-7xl md:text-5xl font-bold`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default SplitText;
