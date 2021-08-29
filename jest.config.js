

module.exports = {
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  clearMocks: true,
  testEnvironment: "jsdom",
};
