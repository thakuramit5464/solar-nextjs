/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "solar-nextjs"; // update if repo name changes

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

module.exports = nextConfig;
