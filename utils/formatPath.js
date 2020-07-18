// https://github.com/hashicorp/next-mdx-enhanced#front-matter
const formatPath = (path) => {
  return path.replace(/\.mdx$/, "");
};

export default formatPath;
