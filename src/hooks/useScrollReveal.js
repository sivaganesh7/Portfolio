import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (threshold = 0.2, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
};
