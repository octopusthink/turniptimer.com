import { css } from '@emotion/core';
import { Button, TextField, useTheme } from '@octopusthink/nautilus';
import React from 'react';

const SignupForm = () => {
  const theme = useTheme();
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/octopusthink"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/octopusthink', 'popupwindow')"
      class="embeddable-buttondown-form"
      css={css`
        text-align: center;
        @media screen and (min-width: 560px) {
          display: flex;
          align-items: flex-end;
        }
      `}
    >
      <input type="hidden" value="1" name="embed"></input>
      <input type="hidden" name="tag" value="turnip-beta"></input>

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
        />
      </div>
      <Button
        noMargin
        primary
        css={css`
          white-space: nowrap;
          @media screen and (min-width: 560px) {
            margin-left: 0.8rem;
          }
        `}
      >
        Sign me up!
      </Button>
      {/* <input type="email" name="email" id="bd-email"></input> */}
      {/* <input type="submit" value="Subscribe"></input> */}
    </form>
  );
};

export default SignupForm;
