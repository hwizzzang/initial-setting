const size = {
    sm: '375px',
    md: '768px',
    lg: '1280px',
    xl: '1440px',
};

const colors = {
    backgrounds: {
        skeleton: '#eeeeee',
    },
    highlights: {
        skeleton: '#f5f5f5',
    },
    testColor: 'blue',
};

const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
};

const fonts = {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Inter, Noto Sans KR, Segoe UI, Sans-Serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    fontSizes: {
        normal: '1.6rem',
    },
};

const theme = {
    colors,
    device,
    fonts,
};

export type CustomTheme = typeof theme;

export default theme;
