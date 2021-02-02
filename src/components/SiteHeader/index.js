import { css } from '@emotion/core';
import { SkipLink, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import Button from 'components/Button';
import Image from 'components/Image';
import Circle from 'static/images/circle.svg';

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
          grid-gap: ${theme.site.tabletPadding};
          align-items: center;
          max-width: ${theme.site.maxHeaderWidth};
          margin: 0 auto -1.6rem;
          padding: ${theme.site.tabletPadding};
          position: relative;
          width: 100%;

          @media screen and (min-width: 420px) {
            grid-gap: ${theme.site.mobilePadding};
            grid-template-columns: 1fr 2fr;
          }

          @media screen and (min-width: 560px) {
            grid-gap: ${theme.site.tabletPadding};
            margin: 2.4rem auto 0;
          }
        `}
      >
        <Circle
          className="circle"
          css={css`
            position: absolute;
            z-index: 0;
            width: 28rem;
            height: auto;
            opacity: 0.05;
            right: -2.4rem;
            top: 0rem;
          `}
        />
        <Image
          css={css`
            @media screen and (max-width: 419px) {
              display: none;
            }

            @media screen and (min-width: 420px) {
              grid-row: 1 / 3;
              margin-bottom: -4.8rem;
            }
          `}
          src="src/images/turnip-logo.png"
          alt=""
        />
        <Image src="src/images/turnip-strapline.png" alt="Turnip: Time for freelancers." />
        <Button
          href="#beta"
          primary
          css={css`
            grid-column: 2 / -1;
            margin: 0 auto;
            align-self: flex-start;
          `}
        >
          Join the beta
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
