import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Featured <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300
                ${activeFilter === cat
                  ? 'bg-accent-primary text-bg-primary shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                  : 'bg-bg-card text-text-muted border border-accent-primary/20 hover:border-accent-primary/50 hover:text-text-primary'
                }`}
              data-cursor-hover
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid — Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe — horizontal scroll-snap */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 -mx-2 px-2"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="snap-center flex-shrink-0 w-[85vw] max-w-sm">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="gradient-border card-shimmer glow-hover h-full flex flex-col"
      style={{ '--card-accent': project.accent }}
    >
      {/* Colored top border override */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
        style={{ background: `linear-gradient(90deg, ${project.accent}, var(--accent-secondary))` }}
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm font-body mb-4 flex-1 leading-relaxed">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-accent-primary/8 text-accent-primary/80 border border-accent-primary/15"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-accent-primary/10 text-accent-primary
              rounded-lg text-sm font-body font-medium hover:bg-accent-primary/20 transition-all border border-accent-primary/20"
            data-cursor-hover
          >
            <ExternalLink size={14} /> Live Demo
          </a> */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-bg-card text-text-muted
              rounded-lg text-sm font-body font-medium hover:text-text-primary hover:bg-bg-card/80 transition-all border border-accent-primary/10"
            data-cursor-hover
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
