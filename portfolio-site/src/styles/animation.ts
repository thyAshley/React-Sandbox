export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -2000,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
    x: 0,
  },
  exit: {
    opacity: 1,
    x: 2000,
    transition: {
      duration: 1,
    },
  },
};

export const pageAnimationWhite = {
  ...pageAnimation,
  show: {
    ...pageAnimation.show,
    background: "white",
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const photoAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
