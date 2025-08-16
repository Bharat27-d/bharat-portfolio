
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    borderColor: "rgba(14, 165, 233, 0.7)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};