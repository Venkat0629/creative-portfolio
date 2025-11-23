import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const About = React.memo(({ about }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {about}
        </motion.p>
      </div>
    </section>
  );
});

About.propTypes = {
  about: PropTypes.string
};

export default About;
