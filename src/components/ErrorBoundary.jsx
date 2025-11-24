import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleRetry = () => {
    // Reset to initial state and optionally invoke external retry logic
    this.setState({ hasError: false, error: null });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Oops! Something went wrong.</h2>
          <p>{error && error.message ? error.message : 'Unknown Error'}</p>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onRetry: PropTypes.func,
};

export default ErrorBoundary;
