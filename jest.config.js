module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFiles: ['./chromeStorageMock'],
};
