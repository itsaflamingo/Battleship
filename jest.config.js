const {defaults} = require('jest-config');

module.exports = {
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    },
    verbose: true,
    
  }
  