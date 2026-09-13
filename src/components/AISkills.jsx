import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu } from 'lucide-react';
import { aiTools } from '../data/aiTools';

const AISkills = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="ai-arsenal" className="relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(108,60,233,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108,60,233,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cpu size={32} className="text-accent-primary pulse-circuit" />
            <h2 className="font-display font-bold text-3xl md:text-5xl">
              AI <span className="text-accent-primary">Arsenal</span>
            </h2>
          </div>
          <p className="text-text-muted font-body text-sm max-w-md mx-auto">
            Hands-on proficiency with cutting-edge AI tools, frameworks, and workflows
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* AI Tool Categories */}
        <div className="space-y-10">
          {aiTools.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.12 }}
            >
              {/* Category label */}
              <h3 className="font-display font-semibold text-lg mb-4 text-text-primary">
                {category.category}
              </h3>

              {/* Pill grid */}
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + toolIndex * 0.05 }}
                    className="hex-pill"
                    data-cursor-hover
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISkills;
