# TanStack Learning Sandbox
 
A small TanStack Start app I use to learn the framework hands-on. The goal is understanding, not shipping: I write every line myself and use this repo to try things out before using them in real projects.
 
## What's in it so far
 
- **File-based routing** with TanStack Router: a home page, an about page and a shared root layout
- **Custom error pages**: a 404 page for unknown routes and a 500 page for errors
- **shadcn/ui on Base UI**: the theme set up with the shadcn CLI, plus button and dropdown menu components
- **A custom component**: a link that looks like a button, built on top of the shadcn button
- **Dark mode**: a theme provider and a light/dark toggle, added by hand
- **Tailwind CSS** for styling and the Inter variable font
## Stack
 
TanStack Start, TanStack Router, React, TypeScript, Tailwind CSS, shadcn/ui (Base UI), Vite, Nitro
 
## Running it
 
```bash
npm install
npm run dev       # http://localhost:3000
```
 
Other scripts:
 
```bash
npm run build     # production build
npm run lint      # ESLint
npm run format    # Prettier, then ESLint auto-fixes
npm run check     # check formatting without changing files
```
 
## Project layout
 
```
src/
  routes/          file-based routes (__root.tsx, index.tsx, about.tsx)
  components/
    ui/            shadcn/ui components and the theme provider
    custom/        my own components
    error-pages/   500 page
    not-found-pages/  404 page
  lib/utils.ts     class-name helper
```
 
## Author
 
Manish Goyal | [manishgoyal.dev](https://manishgoyal.dev) | [GitHub](https://github.com/mishucodes)
 
