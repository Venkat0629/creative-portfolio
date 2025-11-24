import PropTypes from 'prop-types';
import './Container.css';

const Container = ({
  children,
  maxWidth = 'default',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const containerClass = `container container-${maxWidth} ${className}`;

  return (
    <Component className={containerClass} {...props}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['narrow', 'default', 'wide', 'full']),
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Container;
