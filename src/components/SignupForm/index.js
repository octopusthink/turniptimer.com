import { css } from '@emotion/core';
import { Button, Paragraph, TextField } from '@octopusthink/nautilus';
import React from 'react';

const SignupForm = () => {
  return (
    <React.Fragment>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/octolabs"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://buttondown.email/octolabs', 'popupwindow')"
        css={css`
          margin-bottom: 3.2rem;
          text-align: center;

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
          />
        </div>
        <Button
          noMargin
          primary
          type="submit"
          css={css`
            white-space: nowrap;
            @media screen and (min-width: 560px) {
              margin-left: 0.8rem;
            }
          `}
        >
          Sign me up!
        </Button>
      </form>

      <Paragraph light small>
        Your information will only be used to send beta notifications, and will never be sold to
        anyone. You can unsubscribe at any time. Beta users will receive discounts on the full
        product and our undying affection.
      </Paragraph>
    </React.Fragment>
  );
};

export default SignupForm;
