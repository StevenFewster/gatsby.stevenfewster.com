const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Steven Fewster's Personal Blog for Cocktails, Code and Sundries", // <title>
  shortSiteTitle: "Steven Fewster Personal Site", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Steven Fewster",
  authorTwitterAccount: "stevenfewster",
  // info
  infoTitle: "Steven Fewster",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Steven Fewster blog for GatsbyJS",
  manifestShortName: "FewsterBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "steven.fewster@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/stevenfewster" },
    { name: "twitter", url: "https://twitter.com/stevenfewster" },
    { name: "linkedin", url: "http://linkedin.com/in/stevenfewster" }
  ]
};
