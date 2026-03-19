import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'pepakayalasivaganesh@gmail.com', href: 'mailto:pepakayalasivaganesh@gmail.com' },
  { icon: Phone, label: 'Mobile', value: '+91 7075366288', href: 'tel:+917075366288' },
  { icon: MapPin, label: 'Location', value: 'Rajahmundry, AP — 533126', href: '#' },
];

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/p-sivaganesh' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/sivaganesh7' },
];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // EmailJS integration
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent! I'll reply within 24 hours 🚀", {
        style: {
          background: '#0D1F3C',
          color: '#F0F6FF',
          border: '1px solid rgba(0,212,255,0.3)',
        },
        iconTheme: { primary: '#00D4FF', secondary: '#050A14' },
      });
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        style: {
          background: '#0D1F3C',
          color: '#F0F6FF',
          border: '1px solid rgba(255,100,100,0.3)',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
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
            Contact <span className="text-accent-primary">Us</span>
          </h2>
          <p className="text-text-muted font-body max-w-md mx-auto">
            Have a project idea or want to collaborate? Let&apos;s connect!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-xl mb-6">Contact Information</h3>
            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  data-cursor-hover
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center
                    border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all">
                    <item.icon className="text-accent-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-body">{item.label}</p>
                    <p className="text-text-primary text-sm font-body font-medium group-hover:text-accent-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <h3 className="font-display font-semibold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-bg-card border border-accent-primary/20 flex items-center justify-center
                    hover:bg-accent-primary/10 hover:border-accent-primary/40 transition-all group"
                  data-cursor-hover
                  aria-label={social.label}
                >
                  <social.icon className="text-text-muted group-hover:text-accent-primary transition-colors" size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="gradient-border p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-body text-text-muted mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-body text-text-muted mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-body text-text-muted mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs font-body text-text-muted mb-1.5 block">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="form-input resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-accent-primary text-bg-primary font-body font-semibold rounded-lg
                  hover:bg-accent-primary/90 transition-all duration-300 flex items-center justify-center gap-2
                  shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]
                  disabled:opacity-60 disabled:cursor-not-allowed"
                data-cursor-hover
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
