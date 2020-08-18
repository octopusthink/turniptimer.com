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
            margin: 0;
          }
        `}
      />
      <div
        css={css`
          margin: 0 auto;
          max-width: ${config.siteWidth};
          padding: 0;
        `}
      >
        <SiteHeader />
        <main
          id="content"
          css={css`
            margin: 0 auto;
            max-width: ${config.contentWidth};
            padding: 0 1.6rem;
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
