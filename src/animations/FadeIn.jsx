import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
