This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Setup

### Requirements

**Delete the .git folder after cloning the project !!!**

Node >=18.17.0

`yarn install` install deps
`yarn dev` start dev project

App is set to run on [http://localhost:3000](http://localhost:3000)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Dark mode
Set to system default, but can be set to either light/dark directly in the root layout.

Use ```next-themes``` to set the theme or remove it if not needed.

### i18n
This project uses next catch-all route to handle i18n. The default locale is set to `en`.

Currently the locale config is in `constants` folder, but it can be moved to a separate config folder if needed.

To remove this feature, simply remove the `[lang]` route and move the files to the root of the `app` folder.

### SEO
The project generates `robots.txt` and `sitemap.xml` automatically. Refer to `robots.ts` and `sitemap.ts` for more info.
