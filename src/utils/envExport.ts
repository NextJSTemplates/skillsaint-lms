if (!process.env.NEXT_PUBLIC_SITE_NAME) {
  throw new Error("NEXT_PUBLIC_SITE_NAME is not defined");
}
if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
export const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;
