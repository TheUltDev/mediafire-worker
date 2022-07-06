import {createStitches} from '@stitches/core';

export const {css, getCssText, globalCss} = createStitches({
  theme: {
    colors: {
      // General
      white: '#FFFFFF',
      black: '#OE1116',
      // Blue
      blue1: '#000A27',
      blue2: '#002369',  // Used as background for content sections (Ex.: homepage), text link hover
      blue3: '#0045AD',  // Used as background for main header
      blue4: '#0070F0',  // Base blue: headings and main UI elements like buttons and text links
      blue5: '#479DF4',
      blue6: '#8FC7F8',
      blue7: '#D6ECFD',
      // Gray
      gray1: '#1E232F',
      gray2: '#222835',  // Base gray: default body text color, backgrounds
      gray3: '#3D424E',
      gray4: '#575B65',
      gray5: '#72767E',  // Use for lighter text on white background. This is the lightest value text can be
      gray6: '#8C8F96',
      gray7: '#A7A9AE',
      gray8: '#C1C3C7',
      gray9: '#DBDCDF',
      gray10: '#E9EAEB',
      gray11: '#F4F4F5', // Background shading for content boxes, dividers
      // Green
      green1: '#082118',
      green2: '#165A3A',
      green3: '#259355',
      green4: '#33CC66', // Base green: CTAs, status, decorative. Use together with Gray2 or darker
      green5: '#6CDA8E',
      green6: '#A5E9B7',
      green7: '#DEF7E4',
      // Gold
      gold1: '#291F01',
      gold2: '#705403',
      gold3: '#B88A05',
      gold4: '#FFBF07',  // Base gold: warning status and UI. Use together with Gray2 or darker
      gold5: '#FFD14C',
      gold6: '#FFE392',
      gold7: '#FFF5D7',
      // Red
      red1: '#27100B',
      red2: '#692B1D',
      red3: '#AD4730',
      red4: '#F06242',  // Base red: danger status and UI. Use together with Gray2 or darker
      red5: '#F48E77',
      red6: '#F8BAAC',
      red7: '#FDE6E1',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '18px',
    },
    radii: {
      1: '4px',
    },
    fonts: {
      default: 'sans-serif',
      mono: 'monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    sizes: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xsm: '(min-width: 320px)',
    sm: '(min-width: 480px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 1024px)',
    xlg: '(min-width: 1920px)',
  },
  utils: {
    marginX: (margin: number) => ({
      marginLeft: margin,
      marginRight: margin,
    }),
    marginY: (margin: number) => ({
      marginTop: margin,
      marginBottom: margin,
    }),
    paddingX: (padding: number) => ({
      paddingLeft: padding,
      paddingRight: padding,
    }),
    paddingY: (padding: number) => ({
      paddingTop: padding,
      paddingBottom: padding,
    }),
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    fontFamily: '$default',
    display: 'flex',
    flexDirection: 'column',
  },
})();
