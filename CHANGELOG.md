# v3

## 0.5.0

### General changes

- Added H3 override for conflicting nuxt/trpc versions


- update typescript to 5.0.4
- update eslint config to 0.38.5
- update trpc to 10.19.1
- update trpc-nuxt to 0.9.0
- update eslint to 8.38.0
- update @nuxt/devtools to 0.3.2
- update trpc to 10.20.0
- update next-auth to 4.22.1
- update prisma to 4.13.0
- update trpc to 10.21.0
- update nuxt to 3.4.2
- update vue-tsc to 1.4.0
- update @next-auth/prisma-adapter to 1.0.6
- update vue-tsc to 1.4.2
- update @nuxt/devtools to 0.4.2
- update vue-tsc to 1.4.4
- update vitest to 0.30.1
- update tailwindcss to 6.6.7
- update superjson to 1.12.3
- update eslint to 8.39.0
- update nuxt/devtools to 3.4.1
- update @antfu/eslint-config to 0.38.4
- update nuxt-auth to 0.5.0
- update trpc to 10.21.1
- update vitest to 0.30.0
- update tailwindcss to 6.6.6
- update postcss to 8.4.23
- update nuxt to 3.4.3
- update trpc to 10.21.2

## 0.4.0

### General Changes

- remove redundant test:prepare script
- update dependencies (nuxt-auth API changes)

## 0.3.0

### General changes

- update @nuxt/test-utils to 3.3.3
- update @antfu/eslint-config to 0.38.3
- update nuxt to 3.3.3
- swap tailwindcss for nuxt module
- update next-auth to 4.21.1
- update eslint to 8.37.0
- add vitest-mock-extended

## 0.2.2

### General changes

#### Type safe env support

V3 now support a type-safe env configuration; You can use the `envConfig.ts` file to
configure this feature. Please note that for use in production, this will also take effect.

#### Testing

I've added support for testing the TRPC procedures, as well as components using Vitest.
I've included a few example tests for demonstration purposes, as well as several commands for Vitest,
including the experimental Vitest UI.

### Configuration changes

The included settings.json file for VSCode has been updated to enable you to hide certain files/folders
that aren't prudent for day-to-day development.

### Dependency upgrades

- update eslint-config to 0.37.0
- update changeset to 2.26.1
- update @nuxt/devtools to 0.3.1
- update @nuxt/test-utils to 3.2.2
- update @sidebase/nuxt-auth to 0.4.4
- update @types/node to 18.15.0
- update @vitejs/plugin-vue to 4.1.0
- update @vue/test-utils to 2.3.2
- update autoprefixer to 10.4.14
- update eslint to 8.36.0
- update jsdom to 21.1.1
- update nuxt to 3.3.2
- update prisma to 4.12.0
- update tailwind to 3.3.0
- update vitest to 0.29.8
- update to next-auth to 4.20.1
- update trpc to 10.18.0
- update next-auth to 4.20.1
- update trpc-nuxt to 0.8.0
- update zod to 3.21.4
- update ts-pattern to 4.2.2

## 0.2.1

- update trpc to 10.13.2
- update nuxt to 3.2.3
- update prisma to 4.11.0
- fix auth origin in production
- adjust error handling with nuxtErrorBoundary

## 0.2.0

- update nuxt to 3.2.2
- update ts-pattern to 4.2.1
- update @types/node to 18.14.0
- update zod to 3.20.6
- update trpc-nuxt to 0.7.0
- update typescript to 4.9.5
- update trpc to 10.12.0
- update eslint to 8.35.0
- update @types/node to 18.14.0
- update vue-tsc to 1.2.0
- update prisma to 4.10.1
- update tailwindcss to 3.2.7

## 0.1.0

- cb78a9a: update nuxt to 3.1.1
- 1a6da46: add changeset support
- d00c194: update prisma to 4.9.0
- add additional package.json commands
