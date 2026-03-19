import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="achievements" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            <Trophy className="inline-block text-accent-primary mr-2 mb-1" size={36} />
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border p-6 text-center glow-hover card-shimmer"
            >
              <div className="text-4xl mb-4">{ach.icon}</div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-1">{ach.title}</h3>
              <p className="text-accent-primary font-body text-sm font-medium mb-2">{ach.event}</p>
              <p className="text-text-muted text-xs font-body">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
