module.exports = {
	clearMocks: true,
  testEnvironment: 'jsdom',
	rootDir: './',
	globals: {
		'ts-jest': {
			diagnostics: false,
			isolatedModules: true,
			tsconfig: '<rootDir>/tsconfig.test.json',
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	testPathIgnorePatterns: ['node_modules'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!@aller)/'],
	testRegex: '\\.(test)\\.(ts|tsx|js|jsx)?$',
	transform: {
		'^.+\\.(js|jsx)?$': ['babel-jest', { cwd: __dirname }],
		'^.+\\.(ts|tsx)?$': 'ts-jest',
	},
}
