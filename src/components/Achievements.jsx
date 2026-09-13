import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award, Sparkles } from 'lucide-react';
import { achievements } from '../data/achievements';
import { useState } from 'react';

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="achievements" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 mb-5">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-xs font-body font-medium text-amber-700">Recognition & Awards</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            <Trophy className="inline-block text-accent-primary mr-2 mb-1" size={36} />
            Achievements
          </h2>
          <p className="text-text-muted font-body text-sm max-w-lg mx-auto mb-4">
            Milestones from hackathons, competitions, and innovation challenges
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              data-cursor-hover
              style={{ minHeight: '320px' }}
            >
              {/* Image Section */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                <motion.img
                  src={ach.image}
                  alt={ach.event}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  animate={{
                    scale: hoveredIndex === i ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                {/* Floating medal badge */}
                <motion.div
                  className="absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md bg-white/90"
                  style={{ border: `2px solid ${ach.color}` }}
                  animate={{
                    rotate: hoveredIndex === i ? [0, -8, 8, -4, 0] : 0,
                    scale: hoveredIndex === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {ach.icon}
                </motion.div>

                {/* Event name on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-medium text-white bg-black/60 shadow-sm">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    {ach.event}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 relative">
                {/* Subtle gradient accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${ach.color}, var(--accent-primary))` }}
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-primary mb-1 group-hover:text-accent-primary transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="text-text-muted text-sm font-body leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center"
                    animate={{
                      x: hoveredIndex === i ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award size={18} className="text-accent-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: hoveredIndex === i
                    ? `0 0 0 1px ${ach.color}30, 0 20px 60px ${ach.color}10`
                    : '0 0 0 0px transparent',
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
