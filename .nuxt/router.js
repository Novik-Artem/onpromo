import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54d7ca16 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _50ed69ea = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _d0f6c386 = () => interopDefault(import('..\\pages\\packages\\index.vue' /* webpackChunkName: "pages/packages/index" */))
const _78ee266c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _15f13d00 = () => interopDefault(import('..\\pages\\equipment\\_categoryId\\index.vue' /* webpackChunkName: "pages/equipment/_categoryId/index" */))
const _1af5f6f8 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _3d289f94 = () => interopDefault(import('..\\pages\\services\\_id.vue' /* webpackChunkName: "pages/services/_id" */))
const _32ab0130 = () => interopDefault(import('..\\pages\\equipment\\_categoryId\\_id.vue' /* webpackChunkName: "pages/equipment/_categoryId/_id" */))

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
    component: _54d7ca16,
    name: "company"
  }, {
    path: "/contacts",
    component: _50ed69ea,
    name: "contacts"
  }, {
    path: "/packages",
    component: _d0f6c386,
    name: "packages"
  }, {
    path: "/",
    component: _78ee266c,
    name: "index"
  }, {
    path: "/equipment/:categoryId",
    component: _15f13d00,
    name: "equipment-categoryId"
  }, {
    path: "/projects/:id?",
    component: _1af5f6f8,
    name: "projects-id"
  }, {
    path: "/services/:id?",
    component: _3d289f94,
    name: "services-id"
  }, {
    path: "/equipment/:categoryId?/:id",
    component: _32ab0130,
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
