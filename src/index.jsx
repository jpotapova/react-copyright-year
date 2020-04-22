import React from 'react';
import PropTypes from 'prop-types';

function CopyrightYear({ prefix, suffix, ...rest }) {
  const formattedPrefix = prefix ? `${prefix} ` : '';
  const formattedSuffix = suffix ? ` ${suffix}` : '';

  return (
    <span {...rest}>
      {`${formattedPrefix}© ${new Date().getFullYear()}${formattedSuffix}`}
    </span>
  );
}

CopyrightYear.defaultProps = {
  prefix: null,
  suffix: null
};

CopyrightYear.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string
};

export default CopyrightYear;
