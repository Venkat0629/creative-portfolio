import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) => {
  const cardClass = `card card-${variant} ${hoverable ? 'card-hoverable' : ''} ${className}`;

  return (
    <div className={cardClass} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
  hoverable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
