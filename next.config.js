/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "solar-nextjs"; // update if repo name changes

const nextConfig = {
  reactStrictMode: true,
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
};

module.exports = nextConfig;
