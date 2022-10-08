const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  maxWorkers: "50%",
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@constants/(.*)$": "<rootDir>/constants/$1",
    "^@types/(.*)$": "<rootDir>/types/$1",
    "^@services/(.*)$": "<rootDir>/services/$1",
    "^@images/(.*)$": "<rootDir>/public/images/$1",
  },
}

module.exports = createJestConfig(customJestConfig)
