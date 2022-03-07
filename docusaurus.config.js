const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'iMS',
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
        alt: 'iMS Systems',
        src: 'img/iMS_Light_Mode.svg',
        srcDark: 'img/iMS_Dark_Mode.svg',
      },
      items: [
        {
          to: '/docs/updates',
          label: 'Patch Notes',
          position: 'left',
        },
        {
          to: '/docs/intro',
          label: 'Tutorial',
          position: 'left',
        },
        {
          to: '/docs/faq',
          label: 'FAQs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
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
              label: 'First-Time Configuration',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Patch Notes',
              to: '/docs/updates',
            },
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
