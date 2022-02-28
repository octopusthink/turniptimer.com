import { css } from '@emotion/react';
import { Link, SkipLink, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import scrollToElement from 'scroll-to-element';
import useMedia from 'use-media';
import Button from 'components/Button';
import Image from 'components/Image';
import Circle from 'static/images/circle.svg';

const SiteHeader = () => {
  const allowsMotion = useMedia('(prefers-reduced-motion: no-preference)');
  const theme = useTheme();

  return (
    <header
      css={css`
        background-image: url(/images/header-bg.png);
        background-position: bottom center;
        background-size: 100%;
        background-repeat: no-repeat;
        border-top: 1px solid transparent;
        width: 100%;
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
        <Link
          to="/"
          css={css`
            box-shadow: none;

            @media screen and (max-width: 419px) {
              display: none;
            }

            @media screen and (min-width: 420px) {
              grid-row: 1 / 3;
              margin-bottom: -4.8rem;
            }

            &:hover {
              box-shadow: none;
            }
          `}
        >
          <Image src="src/images/turnip-logo.png" alt="" />
        </Link>
        <Image src="src/images/turnip-strapline.png" alt="Turnip: Time for freelancers." />
        <Button
          href="/#beta"
          primary
          css={css`
            grid-column: 2 / -1;
            margin: 0 auto;
            align-self: flex-start;
          `}
          onClick={async (event) => {
            if (global && global.document && global.document.querySelectorAll) {
              const betaContainer = global.document.querySelectorAll('#beta');

              if (betaContainer && betaContainer.length) {
                event.preventDefault();

                event.currentTarget.blur();

                await scrollToElement(betaContainer[0], {
                  offset: 0,
                  ease: 'linear',
                  duration: allowsMotion ? 300 : 1,
                });

                setTimeout(
                  () => {
                    const emailFormId = global.document.querySelectorAll('#bd-email');

                    if (emailFormId && emailFormId.length) {
                      emailFormId[0].focus();

                      emailFormId[0].classList.add('jiggle');

                      setTimeout(() => {
                        emailFormId[0].classList.remove('jiggle');
                      }, 400);
                    }
                  },
                  allowsMotion ? 400 : 0,
                );
              }
            }
          }}
        >
          Join the beta
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
