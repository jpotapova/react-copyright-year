import React from 'react';

function CopyrightYear() {
  return <div>{`© ${new Date().getFullYear()}`}</div>;
}

export default CopyrightYear;
