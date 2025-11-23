import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from './Card';
import { ANIMATION_VARIANTS } from '../config/constants';

const Certifications = React.memo(({ accomplishments, certifications }) => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Accomplishments & Certifications
        </motion.h2>
        <motion.div
          className="grid cols-2"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card delay={0}>
            <h3>Accomplishments</h3>
            <motion.div
              className="tags"
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {(accomplishments || []).map((a) => (
                <motion.span
                  className="tag"
                  key={a}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                >
                  {a}
                </motion.span>
              ))}
            </motion.div>
          </Card>
          <Card delay={1}>
            <h3>Certifications</h3>
            <motion.div
              className="tags"
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {(certifications || []).map((c) => (
                <motion.span
                  className="tag"
                  key={c}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
});

Certifications.propTypes = {
  accomplishments: PropTypes.arrayOf(PropTypes.string),
  certifications: PropTypes.arrayOf(PropTypes.string)
};

export default Certifications;
