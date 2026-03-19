import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { GraduationCap, Award, Briefcase, FolderOpen } from 'lucide-react';

const stats = [
  { icon: Award, value: 3, suffix: '+', label: 'Hackathon Awards' },
  { icon: FolderOpen, value: 6, suffix: '+', label: 'Live Projects' },
  { icon: GraduationCap, value: 4, suffix: '+', label: 'Certifications' },
  { icon: Briefcase, value: 2, suffix: '', label: 'Internships' },
];

const education = [
  {
    degree: 'B.Tech CSE',
    school: 'Vishnu Institute of Technology, Bhimavaram',
    period: 'Jul 2024 – Present',
    score: 'CGPA: 8.91',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Godavari Global University, Rajahmundry',
    period: 'Oct 2021 – May 2024',
    score: '89.3%',
  },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: eduRef, inView: eduInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="bg-bg-secondary relative">
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
            About <span className="text-accent-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Avatar */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary animate-pulse-glow" />
              <div className="absolute inset-1 rounded-full bg-bg-card flex items-center justify-center overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcpa501nb/image/upload/v1773914100/WhatsApp_Image_2026-03-12_at_12.37.12_PM1_ln4dg4.jpg" 
                  alt="Siva Ganesh Pepakayala" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="gradient-border p-5 text-center glow-hover"
                >
                  <stat.icon className="w-6 h-6 text-accent-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-2xl md:text-3xl text-accent-primary">
                    {inView ? (
                      <CountUp end={stat.value} duration={1.5} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <p className="text-text-muted text-sm mt-1 font-body">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Bio */}
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10 font-body">
              CS undergraduate at{' '}
              <span className="text-text-primary font-medium">Vishnu Institute of Technology</span>{' '}
              with hands-on experience building SaaS platforms, AI-powered tools, and full-stack web
              applications. I turn ideas into production-ready software — from intuitive frontends to
              scalable backends and intelligent ML pipelines.
            </p>

            {/* Education Timeline */}
            <div ref={eduRef}>
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <GraduationCap className="text-accent-primary" size={22} />
                Education
              </h3>
              <div className="relative pl-6 border-l-2 border-accent-primary/30 space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={eduInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[calc(0.75rem+1px)] top-1.5 w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                    <h4 className="font-display font-semibold text-lg text-text-primary">{edu.degree}</h4>
                    <p className="text-text-muted text-sm font-body">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-accent-primary/30 text-accent-primary">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-accent-secondary/30 text-accent-secondary">
                        {edu.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
