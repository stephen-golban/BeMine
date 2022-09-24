module.exports = {
  preset: 'react-native',

  // The following are required for @react-navigation module to pass the tests
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  timers: 'fake',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!@react-native|react-native)'],
};
