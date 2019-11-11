import { generateRoutes } from './util/ghost'
const pkg = require('./package')
require('dotenv').config()

export default {
  mode: 'universal',
  version: pkg.version,
  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },
  /*
  ** Add overriding info for meta items
  */
  meta: {
    name: 'JSNG' // this is needed to change title for all PWA meta tags
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e84b0d' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-purgecss',
    'nuxt-ssr-cache',
  ],
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',

    ],
    
    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60,
    },
  },
  env: {
    // loaded from .env file locally and from netlify in deployment
    ghostUri: process.env.GHOST_URI,
    ghostKey: process.env.GHOST_KEY,
    siteUrl: process.env.SITE_URL
  },
  workbox: {
    dev: false
  },
  /*
  * Generate dynamic routes for static site generations
  */
  generate: {
    subFolders: false,
    routes: generateRoutes
  },
  /*
  ** Extend routes so multiple routes can use same component
  */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'PostIndex',
        path: '/page/:pageNumber',
        component: resolve(__dirname, 'pages/index.vue')
      })

      routes.push({
        name: 'TagIndex',
        path: '/tag/:slug/page/:pageNumber',
        component: resolve(__dirname, 'pages/tag/_slug.vue')
      })

      routes.push({
        name: 'AuthorIndex',
        path: '/author/:slug/page/:pageNumber',
        component: resolve(__dirname, 'pages/author/_slug.vue')
      })
    }
  },
  purgecss: {},
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    // postcss: {
    //   preset: {
    //     features: {
    //       customProperties: true
    //     }
    //   }
    // },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
