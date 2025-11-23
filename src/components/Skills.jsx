import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../config/constants';

const Skills = React.memo(({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="skills-container"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {(skills || []).map((s) => (
            <motion.a
              href={s.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              key={s.name}
              variants={ANIMATION_VARIANTS.fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={s.badge}
                alt={`${s.name} logo`}
                className="skill-badge"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      badge: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
};

export default Skills;
