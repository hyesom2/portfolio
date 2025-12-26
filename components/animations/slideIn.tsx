'use client';

import { motion } from 'framer-motion';

type SlideInProps = {
  children: React.ReactNode;
  distance?: number;
  duration?: number;
};

export default function SlideIn({
  children,
  distance = 50,
  duration = 0.8,
}: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
