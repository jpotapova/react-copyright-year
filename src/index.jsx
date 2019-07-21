import React from 'react';
import PropTypes from 'prop-types';

function CopyrightYear(props) {
  const { prefix, suffix } = props;
  return <span>{`${prefix}© ${new Date().getFullYear()}${suffix}`}</span>;
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
