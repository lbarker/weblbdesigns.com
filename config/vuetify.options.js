import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  violet: {
    primary: colors.pink.base, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.indigo.base, // secondary main
    secondarylight: colors.indigo.lighten4, // secondary light
    secondarydark: colors.indigo.darken4, // secondary dark
    anchor: colors.indigo.base // link
  }
}

export const theme = {
  ...palette.violet
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
