const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-PT', 'de-DE'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
