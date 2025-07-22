import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
};

export default config;