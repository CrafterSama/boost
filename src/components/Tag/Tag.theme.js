import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

import { hexToRGBA } from './Tag.utils';

const name = 'tag';

const [TagOuter, themeOuter] = createThemeTag(name, ({ COLORS, FONTS }: *): * => ({
  root: {
    margin: 0,
    height: '24px',
    padding: '0 12px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    border: '1px solid',
    ...FONTS.OVERLINE_1,
  },

  modifiers: {
    color: fp.mapValues(
      (color) => (typeof color === 'string' ? {
        backgroundColor: hexToRGBA(color, 10),
        borderColor: hexToRGBA(color, 40),
        color,
      } : null)
      , COLORS),
    condensed: {
      borderRadius: '5px',
      height: '16px',
      fontSize: 10,
      lineHeight: 12,
      textTransform: 'uppercase',
    },
  },
}));


const [TagInner, themeInner] = createThemeTag(`${name}Inner`, (): * => ({
  root: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const theme = {
  ...themeOuter,
  ...themeInner,
};

export {
  TagOuter,
  TagInner,
  theme,
};

