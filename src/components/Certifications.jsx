import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="certifications" className="bg-bg-secondary relative">
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
            <Award className="inline-block text-accent-primary mr-2 mb-1" size={36} />
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Cert Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="gradient-border p-6 glow-hover card-shimmer group relative"
            >
              {/* Badge icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 border border-accent-primary/20
                group-hover:bg-accent-primary/20 transition-all">
                <Award className="text-accent-primary" size={24} />
              </div>

              <h3 className="font-display font-semibold text-lg text-text-primary mb-1">{cert.title}</h3>
              <p className="text-accent-secondary font-body text-sm font-medium mb-3">{cert.issuer}</p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                  {cert.score}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
                  {cert.year}
                </span>
              </div>

              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent-primary hover:underline font-body"
                  data-cursor-hover
                >
                  <ExternalLink size={12} /> View Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
