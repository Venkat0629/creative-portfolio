import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  image,
  alt = '',
}) => {
  const badgeClass = `badge badge-${variant} badge-${size} ${className}`;

  if (image) {
    return (
      <span className={badgeClass}>
        <img src={image} alt={alt} className="badge-img" loading="lazy" />
      </span>
    );
  }

  return <span className={badgeClass}>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Badge;
