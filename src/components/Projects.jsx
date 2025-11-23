import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from './Card';
import { ANIMATION_VARIANTS } from '../config/constants';

const Projects = React.memo(({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid cols-3"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {(projects || []).map((p, index) => (
            <Card key={p.title} delay={index}>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <p className="muted"><strong>Tech:</strong> {p.stack}</p>
              <motion.a
                className="btn"
                href={p.link || '#'}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View
              </motion.a>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
};

export default Projects;
