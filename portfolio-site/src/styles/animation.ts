export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -2000,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
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

export const lineAnimation = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const slider = {
  hidden: {
    x: -2000,
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const swoopSlider = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};
