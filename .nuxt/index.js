import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_064b6325 from 'nuxt_plugin_plugin_064b6325' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_67dcae41 from 'nuxt_plugin_vuescrollto_67dcae41' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_axios_756ab270 from 'nuxt_plugin_axios_756ab270' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axiosport_acead86e from 'nuxt_plugin_axiosport_acead86e' // Source: ..\\plugins\\axios-port.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"ONPROMO.BY - Аренда света, звука, экранов, спецэффекты в Бресте","htmlAttrs":{"lang":"ru"},"link":[{"rel":"canonical","href":"https:\u002F\u002Fonpromo.by"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon.ico"}],"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Аренда света, звука, экранов, спецэффекты в Бресте. Звук и свет для мероприятий. Концертное оборудование, аренда сцены. Брест"},{"property":"og:locale","content":"ru_RU"},{"name":"format-detection","content":"telephone=no"},{"property":"og:title","content":"ONPROMO.BY"},{"property":"og:site_name","content":"ONPROMO.BY"},{"property":"og:url","content":"https:\u002F\u002Fonpromo.by"},{"property":"og:description","content":"Аренда света, звука, экранов, спецэффекты в Бресте. Звук и свет для мероприятий. Концертное оборудование, аренда сцены. Брест"},{"name":"twitter:card","content":"https:\u002F\u002Fonpromo.by\u002Ffavicons\u002Flogo.png"},{"name":"twitter:image","content":"https:\u002F\u002Fonpromo.by\u002Ffavicons\u002Flogo.png"},{"property":"og:image","content":"https:\u002F\u002Fonpromo.by\u002Ffavicons\u002Flogo.png"},{"name":"twitter:title","content":"ONPROMO.BY"},{"name":"twitter:description","content":"Аренда света, звука, экранов, спецэффекты в Бресте. Звук и свет для мероприятий. Концертное оборудование, аренда сцены. Брест"},{"name":"keywords","content":"аренда звук свет экраны, аренда звук свет экраны Брест, световое оборудование, звуковое оборудование, сценическое оборудование, экраны, аренда света, аренда звука, аренда экрана, спецэффекты, прокат света, прокат звука, прокат экранов, звук для мероприятий, свет для мероприятий, экраны для мероприятий, оборудование на свадьбу, свет на свадьбу, звук на свадьбу, экран на свадьбу, тяжёлый дым, концертное оборудование, оборудование для концертов, аренда сцены, сцена на праздники, сцена на мероприятие, сценический комплекс"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_064b6325 === 'function') {
    await nuxt_plugin_plugin_064b6325(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_67dcae41 === 'function') {
    await nuxt_plugin_vuescrollto_67dcae41(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_756ab270 === 'function') {
    await nuxt_plugin_axios_756ab270(app.context, inject)
  }

  if (typeof nuxt_plugin_axiosport_acead86e === 'function') {
    await nuxt_plugin_axiosport_acead86e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
