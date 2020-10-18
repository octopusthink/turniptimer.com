import { css } from '@emotion/core';
import { SkipLink } from '@octopusthink/nautilus';
import React from 'react';

import Image from 'components/Image';

const SiteHeader = () => {
  return (
    <header>
      <SkipLink />
      <Image
        src="src/images/beta-header.png"
        alt="Turnip: Time for freelancers."
        css={css`
          margin-bottom: -4rem;
          width: 100%;

          @media screen and (min-width: 560px) {
            margin-top: -5.6rem;
            margin-bottom: -8rem;
          }
        `}
      />
    </header>
  );
};

export default SiteHeader;
