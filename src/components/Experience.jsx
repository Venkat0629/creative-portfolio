import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from './Card';
import { ANIMATION_VARIANTS } from '../config/constants';

const Experience = React.memo(({ experience }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="grid cols-3"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {(experience || []).map((e, index) => (
            <Card key={e.company} delay={index}>
              <h3>{e.role} — {e.company}</h3>
              <p className="muted experience-period">
                {e.period} {e.client && `• ${e.client}`}
              </p>
              <p className="muted">{e.impact}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      period: PropTypes.string,
      client: PropTypes.string,
      impact: PropTypes.string.isRequired
    })
  )
};

export default Experience;
