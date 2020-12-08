module.exports = {
  verbose: false,
  roots: [
    "<rootDir>/test"
  ],
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  moduleNameMapper: {
    '^@/test$': '<rootDir>/test/index.ts'
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!**/*.d.ts',
  ],
  testMatch: [
    '**/test/**/*.ts'
  ],
  transform: {
    '.*\\.(j|t)s$': 'babel-jest'
  },
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/",
    "/build/",
    "/dev/"
  ]
}
