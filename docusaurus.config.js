// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zephyr Workbench',
  tagline: 'Online documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.ac6-tools.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/zephyr-workbench',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ac6Embedded', // Usually your GitHub org/user name.
  projectName: 'vscode-zephyr-workbench', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/zephyr-workbench.css',
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
        title: 'Zephyr Workbench',
        logo: {
          alt: 'Zephyr Workbench Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://codex.ac6.fr/',
            label: 'Codex',
            position: 'left',
          },
          {
            href: 'https://www.ac6-training.com/cours.php?ref=oRT5',
            label: 'Zephyr Training',
            position: 'left',
          },
          {
            href: 'https://github.com/Ac6Embedded/vscode-zephyr-workbench',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Ac6',
          src: 'img/ac6/logo_ac6.svg',
          href: 'https://www.ac6.fr',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@Ac6Embedded',
              },
              {
                label: 'X/Twitter',
                href: 'https://www.twitter.com/Ac6Embedded',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/ac6',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ac6Embedded/vscode-zephyr-workbench',
              },
            ],
          },
        ],
        copyright: `Copyright © 2004-${new Date().getFullYear()} Ac6. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
