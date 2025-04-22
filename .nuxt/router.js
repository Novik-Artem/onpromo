import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66cde9f9 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _6d895c87 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _f2ddad7e = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages/packages/index" */))
const _4f9aa664 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4a1c3104 = () => interopDefault(import('..\\pages\\equipment\\_categoryId\\index.vue' /* webpackChunkName: "pages/equipment/_categoryId/index" */))
const _1af172fc = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _fb6ab728 = () => interopDefault(import('..\\pages\\equipment\\_categoryId\\_id.vue' /* webpackChunkName: "pages/equipment/_categoryId/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company",
    component: _66cde9f9,
    name: "company"
  }, {
    path: "/contacts",
    component: _6d895c87,
    name: "contacts"
  }, {
    path: "/packages",
    component: _f2ddad7e,
    name: "packages"
  }, {
    path: "/",
    component: _4f9aa664,
    name: "index"
  }, {
    path: "/equipment/:categoryId",
    component: _4a1c3104,
    name: "equipment-categoryId"
  }, {
    path: "/projects/:id?",
    component: _1af172fc,
    name: "projects-id"
  }, {
    path: "/equipment/:categoryId?/:id",
    component: _fb6ab728,
    name: "equipment-categoryId-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
