// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const workshopName = 'search-play-workshop';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Search Playground Workshop',
  tagline: 'Learn to harness the power of MongoDB Atlas Search Playground',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${workshopName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mongodb', // Usually your GitHub org/user name.
  projectName: 'atlas-search-playground-workshop', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mongodb/atlas-search-playground-workshop/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Atlas Search Playground Workshop',
        logo: {
          alt: 'MongoDB Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Workshop',
          },
          {
            href: 'https://github.com/mongodb/atlas-search-playground-workshop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: "Try MongoDB Atlas",
            href: `https://www.mongodb.com/try?${utmParams}`,
          },
          {
            label: "Forums",
            href: `https://www.mongodb.com/community/forums/${utmParams}`,
          },
          {
            label: "Developer Center",
            href: `https://www.mongodb.com/developer/${utmParams}`,
          },
          {
            label: "MongoDB University",
            href: `https://learn.mongodb.com/${utmParams}`,
          },
          {
            href: `https://github.com/${organizationName}/${workshopName}`,
            label: "This lab in GitHub",
          },
          {
            label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
            href: "#",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MongoDB, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;