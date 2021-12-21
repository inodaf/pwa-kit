# PWA Starter · Enterprise Applications

![Testing with Jest](https://img.shields.io/badge/Testing-Jest-pink.svg)
![Code Format by Prettier](https://img.shields.io/badge/Format-Prettier-coral.svg)
![Code Lint with TypeScript ESLint](https://img.shields.io/badge/Linting-TypeScript_ESLint-blue.svg)

**Rapid development with a fully featured environment w/ Next.js and TypeScript.**

### The Stack

**Base**

- ⚡️ Next.js with TypeScript + Paths
- 🍃 Env Vars for `Production`, `Staging`, and `Development`
- 📱 First Class PWA Support
- 👩‍🎤 Support for [TailwindCSS](https://tailwindcss.com)
- ⚛️ Support for [React Query](https://react-query.tanstack.com)

**Quality**

- 🧑‍🔬 Testing with [Jest](https://jestjs.io) + @testing-library(react, hooks) + **Coverage Reports**
- 🐞 Linting with [TypeScript ESLint](https://typescript-eslint.io)
- 📝 Code Format with [Prettier](https://prettier.io)
- 🥸 GraphQL and REST API mocking with [MSW](https://mswjs.io)
- 🌲 E2E Tests with [Cypress](https://www.cypress.io/) _soon_

**CI + Deployment**

- 📍 GitHub Actions for Lint, Format and Testing
- 🚀 Deployment + Preview with Netlify _soon_
- 🚥 Lighthouse CI for each Pull Request _soon_

---

### Getting Started

Base commands for develop, test and build.

**Requirements**

- Node.js Version Manager: [nvm](https://github.com/nvm-sh/nvm)
- Package Manager: [yarn](https://yarnpkg.com)

**Prepare Development**

```sh
# install the Node.js version specified at .nvmrc.
# we will always opt for the latest LTS version.
nvm use
```

> **Note**: If asked, install the version before using it with `nvm install <version>`.

```sh
# install project dependencies
yarn
```

**Development Server**

The command bellow will spawn the Dev Server and also load the Env Vars from `.env`, `.env.development` and `.env.local`.

```sh
# spawns the Next.js Server at http://localhost:3000
yarn dev
```

**Testing**

There are multiple ways for running the tests.

```sh
yarn test   # run tests without watch
yarn test:w # run tests with watch
yarn test:c # run tests with coverage
yarn t      # alias for `yarn test`
```

**Linting**

We split the process into Check and Fix commands.

```sh
yarn lint:check # checks linting without fixing (useful for CI)
yarn lint       # checks linting and fixes issues
```

**Code Formatting**

We also split the process into Check and Fix commands.

```sh
yarn fmt:check # checks formatting without fixing (useful for CI)
yarn fmt       # checks formatting and fixes issues
```

---

### Building

We separate builds per environment: Production or Staging. For both environments the `NODE_ENV` is set to `production`.

**Production**

Refer to `./config/envs/.env.production` for the environment variables.

```sh
yarn build:prod # builds with production bindings
yarn start:prod # starts the built app with production bindings
```

**Staging**

Refer to `./config/envs/.env.staging` for the environment variables.

```sh
yarn build:stag # builds with staging bindings
yarn start:stag # starts the built app with staging bindings
```
