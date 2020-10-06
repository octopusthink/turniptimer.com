import { css } from '@emotion/core';
import { Paragraph, Link } from '@octopusthink/nautilus';
import React from 'react';

import config from 'data/SiteConfig';

const SiteFooter = () => {
  return (
    <footer
      css={css`
        margin: 0 auto;
        max-width: ${config.contentWidth};
        max-width: ${config.siteContentWidth};
        padding: 8rem 0 1.6rem;
        text-align: center;
      `}
    >
      <Paragraph light noMargin small>
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        and{' '}
        <span role="img" aria-label="cephalopods">
          🐙
        </span>{' '}
        by{' '}
        <Link as="a" href="https://octopusthink.com">
          Octopus Think
        </Link>
      </Paragraph>
    </footer>
  );
};

export default SiteFooter;
