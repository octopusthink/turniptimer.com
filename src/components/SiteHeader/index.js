import { css } from '@emotion/core';
import { Button, SkipLink, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import Image from 'components/Image';

const SiteHeader = () => {
  const theme = useTheme();
  return (
    <header
      css={css`
        width: 100%;
        background-image: url(/images/header-bg.png);
        background-position: bottom center;
        background-size: 100%;
        background-repeat: no-repeat;
        border-top: 1px solid transparent;
      `}
    >
      <SkipLink />
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 3fr;
          grid-gap: ${theme.site.mobilePadding};
          align-items: center;
          max-width: ${theme.site.maxContentWidth};
          margin: 0 auto -1.6rem;
          padding: ${theme.site.mobilePadding};

          @media screen and (min-width: 560px) {
            grid-template-columns: 1fr 2fr;
            grid-gap: ${theme.site.tabletPadding};
            margin: 2.4rem auto -4.8rem;
          }
        `}
      >
        <Image src="src/images/turnip-logo.png" alt="" />
        <div
          css={css`
            text-align: center;
          `}
        >
          <Image src="src/images/turnip-strapline.png" alt="Turnip: Time for freelancers." />
          <Button
            href="#beta"
            primary
            css={css`
              margin-top: 2.4rem;
              background-color: ${theme.colors.accent.secondary};
              border: none;
              border-bottom: 0.3rem solid ${theme.colors.accent.secondaryDark};
              padding: 1.6rem 4rem;
            `}
          >
            Join the beta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
