import PropTypes from 'prop-types';
import './Icon.css';

const Icon = ({
  name,
  size = 'medium',
  className = '',
  ariaLabel,
  ...props
}) => {
  const iconClass = `icon icon-${size} ${className}`;

  return (
    <i 
      className={`${iconClass} ${name}`} 
      aria-label={ariaLabel} 
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Icon;
