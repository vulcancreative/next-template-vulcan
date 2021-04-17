module.exports = {
  siteUrl: process.env.SITE_URL
   ? `https://${process.env.SITE_URL}`
   : "https://example.com",
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
