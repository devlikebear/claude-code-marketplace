export default {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'commands/**/*.md',
    'agents/**/*.md',
    '.claude-plugin/**/*.json',
  ],
  testMatch: [
    '**/__tests__/**/*.test.js',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 75,
      functions: 80,
      statements: 80,
    },
  },
  transform: {},
  moduleFileExtensions: ['js', 'json', 'md'],
};
