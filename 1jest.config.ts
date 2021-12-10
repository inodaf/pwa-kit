import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import tsconfig from "./tsconfig.json";

const config: Config.InitialOptions = {
  transform: { "^.+\\.tsx?$": "@swc/jest" },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: ["<rootDir>/tests/unit/**/*.test.ts(x)?"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/react/dont-cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};

console.log(JSON.stringify(config, null, 2));

export default config;
