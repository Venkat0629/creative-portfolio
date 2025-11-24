import PropTypes from 'prop-types';

const Skeleton = ({ width = '100%', height = 32, style = {} }) => (
  <div
    className="skeleton"
    style={{ width, height, ...style }}
    aria-busy="true"
    aria-label="Loading content"
  />
);

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default Skeleton;
