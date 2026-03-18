// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'USTC-MC101',
  tagline: 'A comprehensive Minecraft beginner\'s tutorial',
  favicon: 'img/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miaoning', // Usually your GitHub org/user name.
  projectName: 'USTCMC_mc101_web', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  customFields: {
    footer: {
      description: '由USTC Minecraft 社团构建的综合版 Minecraft 教程与维基社区。生存，建造，探索，永不止步。',
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Miaoning-exe/USTCMC_mc101_web/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'USTC MC101',
        logo: {
          alt: 'USTC-MC101 Logo',
          src: 'img/logo.png',
          href: '/',
        },
        items: [
          { label: '主页', to: '/', position: 'left' },
          { label: '教程文档', to: '/docs', position: 'left' },
          { label: 'Wiki', href: 'https://wiki.ustcmc.com:5500/', position: 'left' },
          {
            label: '社团主页',
            href: 'https://www.ustcmc.com/lobby',
            position: 'right',
            // customProps: {
            //   isButton: true,         
            //   color: 'bg-amber-300'  
            // }
          },
        ],
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: '友链',
            items: [
              {
                label: 'NMO',
                href: 'https://nmo.net.cn:25569/lobby',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ 群',
                to: '/contact',
              },
              {
                label: 'Bilibili 官方号',
                href: 'https://space.bilibili.com/3546788017474530',
              },
            ],
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    // tailwindcss
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
