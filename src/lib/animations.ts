export const spring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 14,
  mass: 0.6,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
