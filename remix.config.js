/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
  mdx: async filename => {
    const [rehypeHighlight] = await Promise.all([
      import("rehype-highlight").then(mod => mod.default)
    ]);
    return {
      rehypePlugins: [rehypeHighlight]
    }
  }
};
