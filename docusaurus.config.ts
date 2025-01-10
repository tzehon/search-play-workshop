import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const workshopName = 'search-play-workshop'

const config: Config = {
  title: 'Atlas Search Fundamentals',
  tagline: 'the workshop',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${workshopName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'organizationName', // Usually your GitHub org/user name.
  projectName: 'projectName', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Atlas Search Fundamentals Workshop',
      logo: {
        alt: 'Atlas Search Fundamentals Workshop logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/mongodb-developer/search-play-workshop',
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
          href: `https://www.mongodb.com/try`,
        },
        {
          label: "Forums",
          href: `https://www.mongodb.com/community/forums/`,
        },
        {
          label: "Developer Center",
          href: `https://www.mongodb.com/developer/`,
        },
        {
          label: "MongoDB University",
          href: `https://learn.mongodb.com/`,
        },
        {
          href: `https://github.com/mongodb-developer/search-play-workshop`,
          label: "This lab in GitHub",
        },
        {
          label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
          href: "#",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MongoDB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
