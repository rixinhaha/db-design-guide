import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/daily-bruin');
  }, [window.location.href]);

  return <></>;
};
