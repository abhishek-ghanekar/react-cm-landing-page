import React from 'react';
import { motion } from 'framer-motion';

const FadeUpBounce = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
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

export default FadeUpBounce;
