// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (no scheme). Local and unset builds use localhost.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
