import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Code2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'Anurag IT Solutions, Rajahmundry',
    duration: 'December 2023 – May 2024',
    stack: ['Python', 'Tkinter', 'SQLite3', 'Git'],
    highlights: [
      'Built GUI-based Bank Management System with secure auth and 5+ CRUD operations',
      'Reduced integration conflicts by 30% through structured Git branching strategy',
      'Delivered efficient SQLite3 database management for accounts and transactions',
    ],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'LearnSquare Technologies',
    duration: 'May 2025 – June 2025',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    highlights: [
      'Built MediTrack Lite — Hospital Management System using MERN stack in a team',
      'Integrated RESTful APIs via Node.js and Express.js for appointment scheduling',
      'Managed MongoDB with CRUD operations and JWT authorization',
    ],
  },
];

const Experience = () => {
  const { ref: lineRef, inView: lineInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Work <span className="text-accent-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Central line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                i % 2 === 0
                  ? 'md:pr-[52%] md:text-right'
                  : 'md:pl-[52%] md:text-left'
              } pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(108,60,233,0.4)]
                  left-[9px] md:left-1/2 md:-translate-x-1/2`}
              />

              {/* Card */}
              <div className="gradient-border p-6 card-shimmer glow-hover">
                <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Briefcase size={18} className="text-accent-primary" />
                  <h3 className="font-display font-semibold text-lg text-text-primary">{exp.role}</h3>
                </div>
                <p className="text-accent-secondary font-body font-medium text-sm mb-1">{exp.company}</p>
                <div className={`flex items-center gap-1.5 mb-4 text-text-muted text-xs font-body ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Calendar size={13} />
                  {exp.duration}
                </div>

                {/* Stack tags */}
                <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-primary/5 text-accent-primary border border-accent-primary/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.highlights.map((hl, j) => (
                    <li key={j} className="text-text-muted text-sm font-body flex items-start gap-2">
                      <Code2 size={14} className="text-accent-primary mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
