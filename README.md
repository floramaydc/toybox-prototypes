# Toybox Prototypes

Runnable public prototype references from [floramaydc.com/toybox](https://floramaydc.com/toybox/).

These are small, inspectable examples for learning, adaptation, and critique. They are not a production design system or a packaged component library.

## Run locally

```bash
git clone https://github.com/floramaydc/toybox-prototypes.git
cd toybox-prototypes
npm install
npm run dev
```

Then open the local URL Astro prints in your terminal, usually `http://localhost:4321`.

## Available prototypes

- [Fluent theme toggle](https://floramaydc.com/toybox/prototypes/fluent-theme-toggle/)
  - Local route: `/fluent-theme-toggle/`
  - Source snippet folder: `fluent-theme-toggle/`
  - Runnable page: `src/pages/fluent-theme-toggle.astro`
  - React component: `src/components/FluentShowcase.tsx`
- [Demo days 0 to 14 reference](https://floramaydc.com/toybox/prototypes/demo-days-0-reference/)
  - Local route: `/demo-days-0-reference/`
  - Source snippet folder: `demo-days-0-reference/`
  - Runnable page: `src/pages/demo-days-0-reference.astro`

## What is in this repo

- A minimal Astro app so `npm run dev` works out of the box.
- Standalone local pages under `src/pages/` for trying the prototypes.
- Copy-friendly source snippets in each prototype folder.

## Notes

- The Fluent prototype uses the public `@fluentui/react-components` package.
- The Demo Days prototype is plain Astro, HTML, CSS, and browser JavaScript.
- If you copy snippets into another Astro project, adjust imports and layout paths for your own project structure.
- Review accessibility, performance, content, and visual styling in your own context before reusing any prototype.
