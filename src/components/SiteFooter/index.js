import { css } from '@emotion/react';
import { Paragraph, Link, heading, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import config from 'data/SiteConfig';

const SiteFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        width: 100%;
        margin: 0 auto;
        padding: 8rem 0 1.6rem;
        text-align: center;
        position: relative;

        &::before {
          content: '';
          display: inline-block;
          background-image: url(/images/header-bg.png);
          background-position: bottom center;
          background-size: 100%;
          background-repeat: no-repeat;
          border-top: 1px solid transparent;
          margin: 0 auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: scaleY(-1);
        }
      `}
    >
      <Paragraph
        light
        noMargin
        small
        css={css`
          color: ${theme.colors.text.inverse};
          margin: 2.4rem auto;
          max-width: ${config.siteContentWidth};
          position: relative;
          font-size: 1.6rem;

          a {
            box-shadow: none;
            color: ${theme.colors.text.inverse};

            &:hover,
            &:focus {
              color: ${theme.colors.text.inverseLight};
            }
          }
        `}
      >
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
        </Link>{' '}
        · <Link to="/">About</Link> · <Link to="/roadmap">Roadmap</Link> ·{' '}
        <Link to="/privacy">Privacy</Link>
      </Paragraph>
    </footer>
  );
};

export default SiteFooter;
