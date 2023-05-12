'use client';

import animateTxtStyles from './AnimatedText.module.scss';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text }) => {
  return (
    <div className={animateTxtStyles.txtContainer}>
      <motion.h1
        className={animateTxtStyles.txtContainer__content}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className={animateTxtStyles.txtContainer__content_span}
            variants={singleWord}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
