const withMdxEnhanced = require("next-mdx-enhanced");
const images = require("remark-images");
const emoji = require("remark-emoji");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [images, emoji],
})();
