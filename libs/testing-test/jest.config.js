module.exports = {
  displayName: 'testing-test',
  preset: '../../jest.preset.js',
  projects: [
    '<rootDir>/libs/testing',
    '<rootDir>/libs/testing-test'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/testing-test'
};
