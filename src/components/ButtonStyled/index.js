import { Button, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const ButtonStyled = (props) => {
  const theme = useTheme();
  const { children, className, href, noMargin, to, primary, minimal } = props;

  return (
    <Button
      className={className}
      href={href}
      navigation
      primary={primary}
      minimal={minimal}
      noMargin={noMargin}
      to={to}
      css={css`
        background-color: ${theme.colors.accent.primary};
        border: none;
        border-radius: 1.2rem;
        border-bottom: 0.3rem solid ${theme.colors.accent.primaryDark};
        color: ${theme.colors.accent.primaryWhite};
        padding: 1.6rem 4rem;

        &:hover {
          background: ${theme.colors.accent.primaryDark};
          border-bottom-color: ${theme.colors.accent.primaryBlack};
          color: ${theme.colors.accent.primaryWhite};
        }

        ${primary &&
          css`
            background-color: ${theme.colors.accent.secondary};
            border-bottom-color: ${theme.colors.accent.secondaryDark};
            color: ${theme.colors.accent.secondaryWhite};

            &:hover {
              background: ${theme.colors.accent.secondaryDark};
              border-bottom-color: ${theme.colors.accent.secondaryBlack};
              color: ${theme.colors.accent.secondaryWhite};
            }

            &:focus {
              box-shadow: 0 0 0 0.4rem ${theme.colors.accent.secondaryLight};
            }
          `}
      `}
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
