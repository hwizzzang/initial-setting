import { css } from '@emotion/react';
import reset from 'react-style-reset';

import { media } from '@styles/mediaQueries';
import { CustomTheme } from '@styles/theme';

export const globalStyles = (props: CustomTheme) => css`
    ${reset};

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        word-wrap: break-word;
        word-break: keep-all;
        font-family: ${props.fonts.fontFamily};
        font-size: ${props.fonts.fontSizes.normal};

        &.overflow {
            overflow: hidden;
        }

        &.overflow.onlyMobile {
            ${media('lg')} {
                overflow: initial;
            }
        }
    }

    input,
    textarea,
    button {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:active {
            color: inherit;
        }
    }

    button {
        border: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;

        &:disabled {
            cursor: inherit;
        }
    }

    label {
        outline: 0;

        &:active {
            border: 0;
        }

        &:focus-visible {
            outline: 0.2rem solid black;
        }

        &:-moz-focusring {
            outline: 0.1rem dotted black;
        }
    }
`;

export default globalStyles;
