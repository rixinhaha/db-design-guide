import React from 'react';

const ContentRenderer = ({ data, children }) => {
  console.log(data);
  return <div>{children}</div>;
};

export default ContentRenderer;
