module.exports = {
  verbose: true,
  preset: "react-native",
  cacheDirectory: "./cache",
  coveragePathIgnorePatterns: [
    "./app/utils/vendor"
  ],
  coverageThreshold: {
    global: {
      statements: 80
    }
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-native|react-clone-referenced-element|react-navigation)"
  ],
  setupFilesAfterEnv: [
    "./setupTests.js"
  ],
};