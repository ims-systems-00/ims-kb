const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'iMS Systems',
  tagline: 'Integrate your business operations, processes and compliance for easier management',
  url: 'https://docs.imssystems.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iMS Systems',
  projectName: 'ims-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'ims systems',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/blog', 
          label: 'Tutorial', 
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/imssystems',
            },
            {
              label: 'Contact us',
              href: 'https://imssystems.tech/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tutorial',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iMS Systems.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/RiadHossain43/ims-docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/RiadHossain43/ims-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
