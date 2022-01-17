import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c1b6a8d = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _27b35a92 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _4f3c9a63 = () => interopDefault(import('../pages/report.vue' /* webpackChunkName: "pages/report" */))
const _52c666f3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _4c1b6a8d,
    name: "list"
  }, {
    path: "/register",
    component: _27b35a92,
    name: "register"
  }, {
    path: "/report",
    component: _4f3c9a63,
    name: "report"
  }, {
    path: "/",
    component: _52c666f3,
    name: "index"
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
