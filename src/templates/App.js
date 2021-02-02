import { css, Global } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import 'typeface-inter';

import config from 'data/SiteConfig';
import GhostShipMDX from 'components/GhostShipMDX';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';

export const App = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <GhostShipMDX>
      <Global
        styles={css`
          body {
            background: ${theme.colors.neutral.white};
            background-image: url(/images/background-texture.jpg);
            background-position: center;
            background-repeat: repeat;
            margin: 0;
          }

          @font-face {
            font-family: 'moranga';
            src: url('/fonts/moranga-regular-webfont.woff2') format('woff2'),
              url('/fonts/moranga-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      <div
        css={css`
          margin: 0 auto;
          padding: 0;
        `}
      >
        <SiteHeader />
        <main
          id="content"
          css={css`
            margin: 0 auto;
            padding: 0;

            li:before {
              display: none;
            }

            h2 strong {
              font-weight: 400;
              position: relative;

              &::before {
                content: '';
                display: block;
                position: absolute;
                bottom: 0.2rem;
                left: 0;
                right: 0;
                height: 1rem;
                width: 100%;
                background-size: 100% 120%;
                background-repeat: no-repeat;
                z-index: -1;
              }
            }

            .overview-panel {
              .circle {
                top: 6.4rem;
                left: 20rem;
              }

              h2 strong::before {
                background-image: url(/images/underline-overview.svg);
              }
            }

            .statistics-panel {
              .circle {
                top: -1.6rem;
                right: 40rem;
              }

              h2 strong::before {
                background-image: url(/images/underline-statistics.svg);
              }
            }

            .menubar-panel {
              .circle {
                top: 10.4rem;
                left: 12rem;
              }

              h2 strong::before {
                background-image: url(/images/underline-menubar.svg);
              }
            }

            .integrations-panel {
              .circle {
                top: -3.2rem;
                right: 40rem;
              }

              h2 strong::before {
                background-image: url(/images/underline-integrations.svg);
              }
            }

            .beta-panel {
              .circle {
                top: -6.4rem;
                left: -6.4rem;
              }

              h2 strong::before {
                background-image: url(/images/underline-beta.svg);
              }
            }
          `}
        >
          {children}
        </main>
        <SiteFooter />
      </div>
    </GhostShipMDX>
  );
};

export default App;
