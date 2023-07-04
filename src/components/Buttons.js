import React from 'react';
import PropTypes from 'prop-types';

// Button component
function Button({ text, onClick, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
