/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === "github";
const repoName = "solar-nextjs";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: isGithubPages,

  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

module.exports = nextConfig;
