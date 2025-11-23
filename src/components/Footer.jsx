import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Footer = React.memo(({ name }) => {
  return (
    <footer>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        © {new Date().getFullYear()} {name || ''}
      </motion.div>
    </footer>
  );
});

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
