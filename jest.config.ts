import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "vite-jest",
  testMatch: ["**/src/components/**/*.spec.ts?(x)"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["**/src/components/**/*.vue"],
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
};

export default config;
