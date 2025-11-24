import PropTypes from 'prop-types';
import './Typography.css';

const Typography = ({
  children,
  variant = 'body',
  as,
  className = '',
  color = 'default',
  align = 'left',
  ...props
}) => {
  const componentMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    caption: 'span',
    label: 'label',
  };

  const Component = as || componentMap[variant] || 'p';
  const typographyClass = `typography typography-${variant} text-${color} text-${align} ${className}`;

  return (
    <Component className={typographyClass} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption', 'label']),
  as: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'muted']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Typography;
