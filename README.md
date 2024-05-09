<h1>🍃 MongoDB BSON Converter</h1>

A tool I made so I can copy from Atlas and use that as an `insertOne` or `insertMany` query
on **Studio 3T** or **MongoDB Compass Console**. It works fine so far. I have unit tests on a separate repo/account lol.

I basically made a custom json parser that reformats the code into a valid query object
that 3T or Compass Console can use.

Wrote the parser with Bun and the help of its Test Runner.

I plan to rewrite this in Go as well. For now, you can visit the website for this (built with Svelte).

<!-- # create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. -->
