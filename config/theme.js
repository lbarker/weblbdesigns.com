// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  violet: {
    primary: colors.pink.base, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.indigo.base, // secondary main
    secondarylight: colors.indigo.lighten4, // secondary light
    secondarydark: colors.indigo.darken4, // secondary dark
    anchor: colors.indigo.base // link
  },
};

const theme = {
  ...palette.violet,
};

export default theme;
