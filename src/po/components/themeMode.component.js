class ThemeMode {
  mode(param) {
    const selectors = {
      light: '.light-mode',
      dark: '.dark-mode',
    };
    return $(selectors[param].toLowerCase());
  }
}

module.exports = ThemeMode;
