import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      toast.success('Email copied to clipboard! 📋', {
        style: {
          background: '#FFFFFF',
          color: '#1A1A2E',
          border: '1px solid rgba(108,60,233,0.2)',
          boxShadow: '0 4px 20px rgba(108,60,233,0.1)',
        },
        iconTheme: { primary: '#6C3CE9', secondary: '#FFFFFF' },
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      toast.success('Phone number copied to clipboard! 📋', {
        style: {
          background: '#FFFFFF',
          color: '#1A1A2E',
          border: '1px solid rgba(108,60,233,0.2)',
          boxShadow: '0 4px 20px rgba(108,60,233,0.1)',
        },
        iconTheme: { primary: '#6C3CE9', secondary: '#FFFFFF' },
      });
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'pepakayalasivaganesh@gmail.com',
      badge: 'Typically replies in 24h',
      description: 'Ideal for project inquiries, freelance gigs, full-time opportunities, or just saying hello.',
      icon: Mail,
      iconBg: 'bg-violet-50 text-accent-primary border-accent-primary/20',
      accentColor: '#6C3CE9',
      primaryAction: {
        label: 'Send Email',
        href: 'mailto:pepakayalasivaganesh@gmail.com',
      },
      secondaryAction: {
        label: copiedEmail ? 'Copied' : 'Copy',
        onClick: () => handleCopy('pepakayalasivaganesh@gmail.com', 'email'),
        copied: copiedEmail,
      },
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/p-sivaganesh',
      badge: 'Open to Network',
      description: 'Connect with me professionally to explore endorsements, recommendations, and career updates.',
      icon: FaLinkedin,
      iconBg: 'bg-blue-50 text-[#0A66C2] border-[#0A66C2]/20',
      accentColor: '#0A66C2',
      primaryAction: {
        label: 'Connect on LinkedIn',
        href: 'https://linkedin.com/in/p-sivaganesh',
        isExternal: true,
      },
    },
    {
      id: 'phone',
      title: 'Phone & WhatsApp',
      value: '+91 7075366288',
      badge: 'Direct Reach',
      description: 'Available for phone calls or quick WhatsApp chats regarding immediate requirements.',
      icon: Phone,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-500/20',
      accentColor: '#10B981',
      primaryAction: {
        label: 'WhatsApp Chat',
        href: 'https://wa.me/917075366288?text=Hi%20Siva%20Ganesh,%20I%20saw%20your%20portfolio!',
        isExternal: true,
        icon: FaWhatsapp,
      },
      secondaryAction: {
        label: 'Call Now',
        href: 'tel:+917075366288',
      },
      copyAction: {
        label: copiedPhone ? 'Copied' : 'Copy',
        onClick: () => handleCopy('+917075366288', 'phone'),
        copied: copiedPhone,
      },
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-accent-primary/20 mb-5">
            <Sparkles size={14} className="text-accent-primary" />
            <span className="text-xs font-body font-medium text-accent-primary">Get In Touch</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Let&apos;s <span className="text-accent-primary">Connect</span>
          </h2>
          <p className="text-text-muted font-body text-base max-w-xl mx-auto">
            I&apos;m actively seeking new opportunities, internships, and collaborative projects. Reach out through any channel below!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border p-6 md:p-7 flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300 bg-white"
              data-cursor-hover
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105 ${method.iconBg}`}>
                    <method.icon size={26} />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 text-text-muted border border-gray-200/60">
                    {method.badge}
                  </span>
                </div>

                {/* Title & Value */}
                <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                  {method.title}
                </h3>
                <p className="font-mono text-sm font-semibold text-accent-primary mb-3 break-all">
                  {method.value}
                </p>
                <p className="text-text-muted text-sm font-body leading-relaxed mb-6">
                  {method.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-gray-100">
                {/* Primary Action */}
                <a
                  href={method.primaryAction.href}
                  target={method.primaryAction.isExternal ? '_blank' : '_self'}
                  rel={method.primaryAction.isExternal ? 'noopener noreferrer' : undefined}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200"
                  style={{
                    backgroundColor: method.accentColor,
                  }}
                  data-cursor-hover
                >
                  {method.primaryAction.icon && <method.primaryAction.icon size={16} />}
                  {method.primaryAction.label}
                  {method.primaryAction.isExternal && <ArrowUpRight size={15} />}
                </a>

                {/* Secondary Action (Copy or Call) */}
                {method.secondaryAction && (
                  method.secondaryAction.onClick ? (
                    <button
                      type="button"
                      onClick={method.secondaryAction.onClick}
                      className="px-3.5 py-2.5 rounded-xl font-body text-xs font-semibold text-text-muted hover:text-text-primary bg-gray-100 hover:bg-gray-200/70 border border-gray-200 transition-all flex items-center gap-1.5"
                      title="Copy to clipboard"
                      data-cursor-hover
                    >
                      {method.secondaryAction.copied ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={method.secondaryAction.href}
                      className="px-3.5 py-2.5 rounded-xl font-body text-xs font-semibold text-text-muted hover:text-text-primary bg-gray-100 hover:bg-gray-200/70 border border-gray-200 transition-all flex items-center gap-1.5"
                      data-cursor-hover
                    >
                      <Phone size={14} />
                      <span>{method.secondaryAction.label}</span>
                    </a>
                  )
                )}

                {/* Copy Action for Phone */}
                {method.copyAction && (
                  <button
                    type="button"
                    onClick={method.copyAction.onClick}
                    className="px-3 py-2.5 rounded-xl font-body text-xs font-semibold text-text-muted hover:text-text-primary bg-gray-100 hover:bg-gray-200/70 border border-gray-200 transition-all flex items-center gap-1"
                    title="Copy number"
                    data-cursor-hover
                  >
                    {method.copyAction.copied ? (
                      <Check size={14} className="text-emerald-600" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Location & GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="gradient-border p-6 md:p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Location Info */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary flex-shrink-0 border border-accent-secondary/20">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-base text-text-primary mb-0.5">
                Rajahmundry, Andhra Pradesh, India 🇮🇳
              </h4>
              <p className="text-text-muted text-xs font-body">
                Available for Remote Work worldwide & open to on-site relocation.
              </p>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sivaganesh7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-body text-sm font-medium hover:bg-black transition-all shadow-sm"
              data-cursor-hover
            >
              <FaGithub size={18} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/p-sivaganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] text-white font-body text-sm font-medium hover:bg-[#084e96] transition-all shadow-sm"
              data-cursor-hover
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
