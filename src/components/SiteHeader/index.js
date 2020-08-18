import { css } from '@emotion/core';
import { SkipLink } from '@octopusthink/nautilus';
import React from 'react';

import Image from 'components/image';

const SiteHeader = () => {
  return (
    <header>
      <SkipLink />
      <Image
        src="src/images/beta-header.png"
        alt="Turnip: Time for freelancers."
        css={css`
          width: 100%;
          margin-top: -5.6rem;
          margin-bottom: -12rem;
        `}
      />
    </header>
  );
};

export default SiteHeader;
