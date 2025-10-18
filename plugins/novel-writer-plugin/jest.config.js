export default {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '__tests__/**/*.test.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
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
