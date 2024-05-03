# trigger.dev v3 pnpm monorepo

Things to note:

- The trigger.dev code lives in the packages/trigger directory, a private package
- The `apps/web` Next.js app has a workspace dependency on `@repo/trigger`
- The `apps/web` Next.js app triggers the example hello world task in `app/actions` which is a server action
- The page.tsx is marked as a client component
- The TRIGGER_SECRET_KEY must be set in the `.env.local` in `apps/web`
- You'll need to set a project reference in the `packages/trigger/trigger.config.ts` file, which you can find in your Trigger.dev dashboard
- I've installed the `trigger.dev` package as a dev dep of `packages/trigger` and created a `dev` script so you should be able to run `pnpm run dev --filter @repo/trigger` from the monorepo root or just `pnpm run dev` from the `packages/trigger` dir
- The `@repo/trigger` folder uses another package, `@repo/dsl`, and that has been added to the `dependenciesToBundle` option, since it's a workspace package

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```
