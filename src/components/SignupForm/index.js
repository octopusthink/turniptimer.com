import { css } from '@emotion/core';
import { Paragraph, TextField } from '@octopusthink/nautilus';
import React, { Fragment } from 'react';
import useMedia from 'use-media';
import Button from 'components/Button';

const SignupForm = () => {
  const allowsMotion = useMedia('(prefers-reduced-motion: no-preference)');

  return (
    <Fragment>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/octolabs"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://buttondown.email/octolabs', 'popupwindow')"
        css={css`
          margin-bottom: 3.2rem;
          text-align: center;
          grid-column: 1 / -1;
          max-width: 80rem;
          margin-bottom: 1.2rem;

          @media screen and (min-width: 560px) {
            display: flex;
            align-items: flex-end;
          }
        `}
      >
        <input type="hidden" value="1" name="embed" />
        <input type="hidden" name="tag" value="turnip-beta" />
        <div
          css={css`
            @media screen and (max-width: 559px) {
              margin-bottom: 1.6rem;
            }
            flex-grow: 1;
            width: 100%;
          `}
        >
          <TextField
            label="Your email"
            name="email"
            id="bd-email"
            type="email"
            autocomplete="email"
            noMargin
            css={css`
              ${allowsMotion &&
                css`
                  &.jiggle {
                    animation: jiggle 0.2s infinite ease-in-out;
                    transform: rotate(-0.25deg);
                  }

                  @keyframes jiggle {
                    0% {
                      transform: rotate(-0.25deg);
                    }

                    50% {
                      transform: rotate(0.25deg);
                    }
                  }
                `}
            `}
          />
        </div>
        <Button
          noMargin
          type="submit"
          css={css`
            white-space: nowrap;
            @media screen and (min-width: 560px) {
              margin-left: 0.8rem;
              margin-bottom: -0.3rem;
            }
          `}
        >
          Sign me up
        </Button>
      </form>

      <Paragraph
        light
        small
        css={css`
          max-width: 48rem;
        `}
      >
        Your information will only be used to send beta notifications, and will never be sold to
        anyone. You can unsubscribe at any time. Beta users will receive discounts on the full
        product and our undying affection.
      </Paragraph>
    </Fragment>
  );
};

export default SignupForm;
