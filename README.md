<h1>
  <img src="./.github/projecticon.svg" width="96" alt="an icon with tones of purple background and 4 lines representing a fast motion." />
  <div>
    PWA Starter · Enterprise Applications
    <div>
      <img src="https://img.shields.io/badge/TypeScript-Next.js%20-white.svg" />
      <img src="https://img.shields.io/badge/Testing-Jest-pink.svg" />
      <img src="https://img.shields.io/badge/Format-Prettier-coral.svg" />
      <img src="https://img.shields.io/badge/Linting-TypeScript_ESLint-blue.svg" />
    </div>
  </div>
</h1>

Starting a new Web App needs to be easy. **PWA Starter** provides a fully featured environment with **Next.js** + **TypeScript** and let you focus on code delivery without compromising best practices.

## The Stack

**Base**

- ⚡️ Next.js with TypeScript + Paths
- 🍃 Env Vars for `Production`, `Staging` and `Development`
- 📱 First Class PWA Support
- 👩‍🎤 CSS Styling with [TailwindCSS](https://tailwindcss.com)
- ⚛️ Support for [React Query](https://react-query.tanstack.com)

**Quality**

- 🧑‍🔬 Testing with [Jest](https://jestjs.io) + @testing-library(react, hooks) + **Coverage Reports**
- 🐞 Linting with [TypeScript ESLint](https://typescript-eslint.io)
- 📝 Code Format with [Prettier](https://prettier.io)
- 🥸 GraphQL and REST API mocking with [MSW](https://mswjs.io)
- 🌲 E2E Tests with [Cypress](https://www.cypress.io/) _soon_

**Security**

- 👮‍♂️ Default CSP support defined via [Envs](./config/envs/.env.production)
- 🔍 CI Sec Inspection with [Mozilla Observatory](https://observatory.mozilla.org/) _soon_

**Accessibility**

- 🧏‍♀️ Linting JSX _a11y_ with [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

**CI + Deployment**

- 📍 GitHub Actions for Test, Lint and Format
- 🚀 Deployment + Preview with Netlify _soon_
- 🚥 Lighthouse CI for each Pull Request _soon_

---

## Getting Started

Base commands for develop, test and build.

**Requirements**

- Node.js Toolchain Manager: [Volta](https://volta.sh)
- Package Manager: [pnpm](https://pnpm.io/installation)

**Prepare Development**

```sh
# install the Node.js version specified at package.json.
# we will always opt for the active LTS version.
volta fetch node
```

```sh
# install project dependencies
pnpm install
```

**Development Server**

The command bellow will spawn the Dev Server and also load the Env Vars from `.env`, `.env.development` and `.env.local`.

```sh
# spawns the Next.js Server at http://localhost:3000
pnpm dev
```

**Testing**

There are multiple ways for running the tests.

```sh
pnpm test   # run tests without watch
pnpm test:w # run tests with watch
pnpm test:c # run tests with coverage
pnpm t      # alias for `pnpm test`
```

**Linting**

We split the process into Check and Fix commands.

```sh
pnpm lint:check # checks linting without fixing (useful for CI)
pnpm lint       # checks linting and fixes issues
```

**Code Formatting**

We also split the process into Check and Fix commands.

```sh
pnpm fmt:check # checks formatting without fixing (useful for CI)
pnpm fmt       # checks formatting and fixes issues
```

---

## Building

Builds are separated by environments: Production and Staging. For both environments the `NODE_ENV` is set to `production`.

**Production**

Refer to `./config/envs/.env.production` for the environment variables.

```sh
pnpm build:prod # builds with production bindings
pnpm start:prod # starts the built app with production bindings
```

**Staging**

Refer to `./config/envs/.env.staging` for the environment variables.

```sh
pnpm build:stag # builds with staging bindings
pnpm start:stag # starts the built app with staging bindings
```

## License

Altough this **template** itself is MIT licensed, if needed, you must change the license after creating your project.
