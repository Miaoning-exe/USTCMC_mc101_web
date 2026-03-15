// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
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
          
          /**
           * @deprecated
           * Custom button item
           */
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
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: 'docs/launcher_tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '加入QQ群',
                to: '/contact',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Miaoning-exe/USTCMC_mc101_web',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} USTCMC_mc101. Built with Docusaurus. <br />
      本网站内容采用 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 许可协议</a> `,
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
