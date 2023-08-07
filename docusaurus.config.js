// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "iMS Knowledge Base",
  tagline:
    "Integrate your business operations, processes and compliance for easier management",
  url: "https://knowledge-base.imssystems.tech",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "iMS Systems",
  projectName: "ims-knowledge-base",
  staticDirectories: ["public", "static"],
  themeConfig: {
    navbar: {
      logo: {
        alt: "iMS Systems",
        src: "img/login-ims-logo.svg",
        srcDark: "img/login-ims-logo.svg",
      },
      items: [
        {
          to: "/docs/intro",
          label: "Tutorial",
          position: "left",
        },
        {
          to: "/docs/faq",
          label: "FAQs",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "/docs/release-notes",
          label: "Release notes",
          position: "left",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "First-Time Configuration",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/imssystems",
            },
            {
              label: "Contact us",
              href: "https://imssystems.tech/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Release notes",
              to: "/docs/updates",
            },
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iMS Systems.`,
    },
    prism: {
      // theme: lightCodeTheme,
      // darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ims-systems-00/ims-kb",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ims-systems-00/ims-kb",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
