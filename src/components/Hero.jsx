import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import { ANIMATION_VARIANTS } from '../config/constants';

const Hero = React.memo(({ loading, profile, links }) => {
  return (
    <section id="home" className="section">
      <div className="container hero">
        {loading ? (
          <motion.div
            className="loading-spinner-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-spinner"></div>
            <p className="muted">Loading...</p>
          </motion.div>
        ) : (
          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="muted"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {profile?.location}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {profile?.name || 'Your Name'}
            </motion.h1>
            <motion.p
              className="subtitle"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              {profile?.title}
            </motion.p>
          </motion.div>
        )}
        <motion.div
          className="cta"
          role="group"
          aria-label="Primary actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a className="btn primary view-resume-btn" href="/resume" aria-label="Open Resume">
            <span className="icon-wrapper">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M9 5v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="btn-text">View Resume</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialLinks email={links?.email} github={links?.github} linkedin={links?.linkedin} />
        </motion.div>
      </div>
    </section>
  );
});

Hero.propTypes = {
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string
  }),
  links: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string
  })
};

export default Hero;