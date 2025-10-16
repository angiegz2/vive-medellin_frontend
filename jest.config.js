export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
};
