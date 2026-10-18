# fredrin-about-me

Zakaria Loai's About Me page. Next.js (App Router), TypeScript, Tailwind CSS.

All page text and links live in `src/content/profile.ts`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Check

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

The site deploys to Vercel with zero configuration. There is no `vercel.json` and no required environment variable.

### Link the repo (one time)

1. In Fredrin, open this project's Vercel app.
2. Link the `fredrin-about-me` GitHub repository.
3. Keep the Vercel defaults: framework preset Next.js, default build command (`next build`) and default output directory.
4. Do not add environment variables. None are needed.

### What happens after linking

- Every push to a branch other than `main` builds a preview deployment with its own URL. The URL shows up on the pull request.
- Every merge to `main` builds and deploys production.
- Vercel sets `VERCEL_PROJECT_PRODUCTION_URL` on its own. Site metadata can read it to build absolute URLs. You never set it by hand.

Node.js 20.9 or newer is required (see `engines` in `package.json`).

### Roll back

In Vercel, promote the previous production deployment. Or revert the change on `main`, which deploys again.
