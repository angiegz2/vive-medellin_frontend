export default {
  testEnvironment: "jsdom", 
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",      
    "!src/**/*.test.js" 
  ],

  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text-summary"],

  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
