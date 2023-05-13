import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children, duration, onClose, onAnimationComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    onAnimationComplete?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-30 bg-amber-300"
        initial={{ width: '0%', x: '0%' }}
        animate={animationComplete ? { width: '0%', x: '100%' } : { width: '100%', x: '0%' }}
        transition={{ duration }}
        onAnimationComplete={handleAnimationComplete}
        onClick={handleClose}
      />
      {children}
    </>
  );
};

export default AnimatedPage;