import React from 'react';
import PropTypes from 'prop-types';

function CopyrightYear({ prefix, suffix, ...rest }) {
  return (
    <span {...rest}>{`${prefix}© ${new Date().getFullYear()}${suffix}`}</span>
  );
}

CopyrightYear.defaultProps = {
  prefix: '',
  suffix: ''
};

CopyrightYear.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string
};

export default CopyrightYear;
