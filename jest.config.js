export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.{test,spec}.{js,jsx,ts,tsx}"
  ],

  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text-summary"],

  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
