import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = React.memo(({
  children,
  className = '',
  onClick,
  hover = true,
  delay = 0,
  ...props
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    hover: {
      y: -4,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    }
  } : {};

  return (
    <motion.article
      className={`card ${className} ${onClick ? 'clickable' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hover ? hoverVariants.hover : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.article>
  );
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  hover: PropTypes.bool,
  delay: PropTypes.number
};

export default Card;
