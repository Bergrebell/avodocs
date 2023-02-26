import {getFiles} from "./getFiles"
import container from "markdown-it-container"

const fieldsMenuItems2 = getFiles('fields', '2.0')
const fieldsMenuItems3 = getFiles('fields', '3.0')

function createContainer(klass, md) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        if (token.nesting === 1) {
          const title = md.renderInline(info || klass)
          return `<section class="${klass}"><h3 class="custom-block-title">${title}</h3><div class="pl-8"><p>\n`
        } else {
          return `</p></div></section>\n`
        }
      },
    },
  ]
}

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "Avo docs",
  description: "Avo Admin for Rails docs.",
  markdown: {
    config: (md) => {
      md.use(...createContainer("option", md))
    },
  },
  head: [
    // <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-174545089-1' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-174545089-1');"
    ],
    [
      'script',
      {defer: true, "data-domain": "docs.avohq.io", src: "https://plausible.io/js/plausible.js"}
    ],
    ['link', { rel:"apple-touch-icon", sizes:"180x180", href:"/favicons/apple-touch-icon.png" }],
    ['link', { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicons/favicon-32x32.png" }],
    ['link', { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicons/favicon-16x16.png" }],
    ['link', { rel:"manifest", href:"/favicons/site.webmanifest" }],
    ['link', { rel:"mask-icon", href:"/favicons/safari-pinned-tab.svg", color:"#5bbad5" }],
    ['link', { rel:"shortcut icon", href:"/favicons/favicon.ico" }],
    ['meta', { name:"msapplication-TileColor", content:"#2b5797" }],
    ['meta', { name:"msapplication-config", content:"/favicons/browserconfig.xml" }],
    ['meta', { name:"theme-color", content:"#ffffff" }],
  ],
  themeConfig: {
    siteTitle: false,
    logo: "/logo.svg",
    editLink: {
      pattern: 'https://github.com/avo-hq/vitepress-docs/edit/main/docs/:path'
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2020-present Adrian Marin'
    },
    nav: [
      {text: "Home", link: "/"},
      {text: "Docs", link: "/2.0/index.html"},
      {text: "Recipes", link: "/2.0/recipes"},
      {text: "FAQ", link: "/2.0/faq"},
      {text: "Team", link: "/team.html"},
      {text: "Version", items: [
        {text: "3.0", link: "/3.0/index.html"},
        {text: "2.0", link: "/2.0/index.html"},
        {text: "1.0", link: "https://v1-docs.avohq.io/1.0/"},
      ]},
    ],
    sidebar: {
      "/3.0/": [
        {
          text: "Getting started",
          items: [
            {text: "Intro", link: "/3.0/index.html"},
            {text: "Avo, Rails & Hotwire", link: "/3.0/rails-and-hotwire.html"},
            {text: "Licensing", link: "/3.0/licensing"},
            {text: "Upgrade guide", link: "/3.0/upgrade"},
          ],
        },
        {
          text: "Configuration",
          items: [
            {text: "Installation", link: "/3.0/installation"},
            {text: "Authentication", link: "/3.0/authentication"},
            {text: "Authorization", link: "/3.0/authorization"},
          ],
        },
        {
          text: "CRUD UI",
          items: [
            {text: "Resource configuration", link: "/3.0/resources"},
            {text: "Controller configuration", link: "/3.0/controllers"},
            {text: "Field options", link: "/3.0/field-options"},
            {text: "Records reordering", link: "/3.0/records-reordering"},
            {text: "Tabs and panels", link: "/3.0/tabs"},
            {text: "Resource sidebar", link: "/3.0/resource-sidebar"},
            {text: "Customizable controls", link: "/3.0/customizable-controls"},
          ],
        },
        {
          text: "Fields",
          collapsible: true,
          collapsed: true,
          items: fieldsMenuItems3,
        },
        {
          text: "Associations",
          collapsible: true,
          collapsed: true,
          items: [
            {text: "Customization", link: "/3.0/associations"},
            {text: 'Belongs to', link: '/3.0/associations/belongs_to.md'},
            {text: 'Has one', link: '/3.0/associations/has_one.md'},
            {text: 'Has many', link: '/3.0/associations/has_many.md'},
            {text: 'Has and belongs to many', link: '/3.0/associations/has_and_belongs_to_many.md'},
          ],
        },
        {
          text: "Dashboards and cards",
          items: [
            {text: "Dashboards", link: "/3.0/dashboards"},
            {text: "Cards", link: "/3.0/cards"},
          ],
        },
        {
          text: "Customize Avo",
          items: [
            {text: "Customization options", link: "/3.0/customization"},
            {text: "Grid view", link: "/3.0/grid-view"},
            {text: "Menu editor", link: "/3.0/menu-editor"},
            {text: "Search", link: "/3.0/search"},
            {text: "Filters", link: "/3.0/filters"},
            {text: "Actions", link: "/3.0/actions"},
            {text: "Localization (I18n)", link: "/3.0/localization"},
            {text: "Branding", link: "/3.0/branding"},
          ],
        },
        {
          text: "Custom content",
          items: [
            {text: "Custom views", link: "/3.0/custom-tools"},
            {text: "Custom fields", link: "/3.0/custom-fields"},
            {text: "Resource tools", link: "/3.0/resource-tools"},
            {text: "Stimulus JS integration", link: "/3.0/stimulus-integration"},
            {text: "Evaluation hosts", link: "/3.0/evaluation-hosts"},
            {text: "Custom asset pipeline", link: "/3.0/custom-asset-pipeline"},
          ],
        },
        {
          text: "Native Avo components",
          items: [
            {text: "Avo::PanelComponent", link: "/3.0/native-components/avo-panel-component"},
            {text: "Native field components", link: "/3.0/native-field-components"},
            {text: "Field wrappers", link: "/3.0/field-wrappers"},
          ],
        },
        {
          text: "Internals",
          items: [
            {text: "Testing", link: "/3.0/testing"},
            {text: "Avo::ApplicationController", link: "/3.0/avo-application-controller"},
            {text: "Avo.asset_manager", link: "/3.0/asset-manager"},
          ],
        },
      ],
      "/2.0/": [
        {
          text: "Getting started",
          items: [
            {text: "Intro", link: "/2.0/index.html"},
            {text: "Avo, Rails & Hotwire", link: "/2.0/rails-and-hotwire.html"},
            {text: "Licensing", link: "/2.0/licensing"},
            {text: "Upgrade guide", link: "/2.0/upgrade"},
          ],
        },
        {
          text: "Configuration",
          items: [
            {text: "Installation", link: "/2.0/installation"},
            {text: "Authentication", link: "/2.0/authentication"},
            {text: "Authorization", link: "/2.0/authorization"},
          ],
        },
        {
          text: "CRUD UI",
          items: [
            {text: "Resource configuration", link: "/2.0/resources"},
            {text: "Controller configuration", link: "/2.0/controllers"},
            {text: "Field options", link: "/2.0/field-options"},
            {text: "Records reordering", link: "/2.0/records-reordering"},
            {text: "Tabs and panels", link: "/2.0/tabs"},
            {text: "Resource sidebar", link: "/2.0/resource-sidebar"},
            {text: "Customizable controls", link: "/2.0/customizable-controls"},
          ],
        },
        {
          text: "Fields",
          collapsible: true,
          collapsed: true,
          items: fieldsMenuItems2,
        },
        {
          text: "Associations",
          collapsible: true,
          collapsed: true,
          items: [
            {text: "Customization", link: "/2.0/associations"},
            {text: 'Belongs to', link: '/2.0/associations/belongs_to.md'},
            {text: 'Has one', link: '/2.0/associations/has_one.md'},
            {text: 'Has many', link: '/2.0/associations/has_many.md'},
            {text: 'Has and belongs to many', link: '/2.0/associations/has_and_belongs_to_many.md'},
          ],
        },
        {
          text: "Dashboards and cards",
          items: [
            {text: "Dashboards", link: "/2.0/dashboards"},
            {text: "Cards", link: "/2.0/cards"},
          ],
        },
        {
          text: "Customize Avo",
          items: [
            {text: "Customization options", link: "/2.0/customization"},
            {text: "Grid view", link: "/2.0/grid-view"},
            {text: "Menu editor", link: "/2.0/menu-editor"},
            {text: "Search", link: "/2.0/search"},
            {text: "Filters", link: "/2.0/filters"},
            {text: "Actions", link: "/2.0/actions"},
            {text: "Localization (I18n)", link: "/2.0/localization"},
            {text: "Branding", link: "/2.0/branding"},
          ],
        },
        {
          text: "Custom content",
          items: [
            {text: "Custom views", link: "/2.0/custom-tools"},
            {text: "Custom fields", link: "/2.0/custom-fields"},
            {text: "Resource tools", link: "/2.0/resource-tools"},
            {text: "Stimulus JS integration", link: "/2.0/stimulus-integration"},
            {text: "Evaluation hosts", link: "/2.0/evaluation-hosts"},
            {text: "Custom asset pipeline", link: "/2.0/custom-asset-pipeline"},
          ],
        },
        {
          text: "Native Avo components",
          items: [
            {text: "Avo::PanelComponent", link: "/2.0/native-components/avo-panel-component"},
            {text: "Native field components", link: "/2.0/native-field-components"},
            {text: "Field wrappers", link: "/2.0/field-wrappers"},
          ],
        },
        {
          text: "Internals",
          items: [
            {text: "Testing", link: "/2.0/testing"},
            {text: "Avo::ApplicationController", link: "/2.0/avo-application-controller"},
          ],
        },
      ],
    },

    algolia: {
      apiKey: "ee35d4018f0bd7cf035aa4cd29cf7c86",
      appId: "3TLBFY0IWW",
      indexName: "avohq",
    },
  },
}

export default config
