
/**
 * Professional Framer Motion Animation Variants
 */

export const containerVariants = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom cubic-bezier for premium feel
    },
  },
};

// Specialized variant for elements centered with translate(-50%, -50%)
export const fadeInUpCentered = {
  hidden: { opacity: 0, y: "-40%", x: "-50%" },
  visible: {
    opacity: 1,
    y: "-50%",
    x: "-50%",
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// Specialized bounceIn for elements that need to stay at y: -50% (vertical centering)
export const bounceInCentered = {
  hidden: { opacity: 0, scale: 0.3, y: "-50%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: "-50%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};
