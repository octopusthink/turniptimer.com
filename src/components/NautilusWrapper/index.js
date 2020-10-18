import React from 'react';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';

import theme from 'data/theme';

const NautilusWrapper = (props) => {
  const { children } = props;

  return (
    <Nautilus config={{ LinkComponent: Link }} theme={theme}>
      {children}
    </Nautilus>
  );
};

export default NautilusWrapper;
