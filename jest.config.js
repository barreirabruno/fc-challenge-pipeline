/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  collectCoverageFrom:
    ['<rootDir>/src/**/*.ts',
    '!<rootDir>/src/__tests__',
    '!<rootDir>/src/index.ts',
      '**/dist/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};