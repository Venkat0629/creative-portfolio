import PropTypes from 'prop-types';
import Container from '../Container/Container';
import './Section.css';

const Section = ({
  children,
  id,
  title,
  subtitle,
  className = '',
  containerWidth = 'default',
  bgVariant = 'default',
}) => {
  const sectionClass = `section section-${bgVariant} ${className}`;

  return (
    <section id={id} className={sectionClass}>
      <Container maxWidth={containerWidth}>
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section-content">{children}</div>
      </Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  containerWidth: PropTypes.oneOf(['narrow', 'default', 'wide', 'full']),
  bgVariant: PropTypes.oneOf(['default', 'alternate']),
};

export default Section;
