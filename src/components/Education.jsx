import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from './Card';
import { ANIMATION_VARIANTS } from '../config/constants';

const Education = React.memo(({ education, educationItems }) => {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        {(educationItems && educationItems.length > 0) ? (
          <motion.div
            className="grid cols-2"
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationItems.map((ed, index) => (
              <Card key={ed.id} delay={index}>
                <div className="edu-card-header">
                  <motion.img
                    className="edu-logo"
                    src={ed.logo}
                    alt=""
                    role="presentation"
                    loading="lazy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div>
                    <h3 className="edu-title">{ed.title}</h3>
                    <p className="edu-meta">{ed.institution}{ed.location ? ` • ${ed.location}` : ''}</p>
                  </div>
                </div>
                <div className="edu-fields">
                  <div className="row"><span className="label">Level</span><span className="value">{ed.level || '—'}</span></div>
                  <div className="row"><span className="label">Grade</span><span className="value">{ed.grade || education?.cgpa || '—'}</span></div>
                  <div className="row"><span className="label">Year</span><span className="value">{ed.year || education?.year || '—'}</span></div>
                </div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <Card delay={0}>
            <div className="edu-card-header">
              <motion.img
                className="edu-logo"
                src="/logos/college.png"
                alt=""
                role="presentation"
                loading="lazy"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <div>
                <h3 className="edu-title">{education?.degree}</h3>
                <p className="edu-meta">{education?.college}{education?.location ? ` • ${education?.location}` : ''}</p>
              </div>
            </div>
            <div className="edu-fields">
              <div className="row"><span className="label">Level</span><span className="value">Graduation</span></div>
              <div className="row"><span className="label">Grade</span><span className="value">{education?.cgpa || '—'}</span></div>
              <div className="row"><span className="label">Year</span><span className="value">{education?.year || '—'}</span></div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
});

Education.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    college: PropTypes.string,
    location: PropTypes.string,
    cgpa: PropTypes.string,
    year: PropTypes.string
  }),
  educationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      level: PropTypes.string,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string,
      year: PropTypes.string,
      logo: PropTypes.string,
      grade: PropTypes.string
    })
  )
};

export default Education;
