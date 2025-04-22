export { default as LayoutsFooter } from '../..\\components\\layouts\\Footer.vue'
export { default as LayoutsHeader } from '../..\\components\\layouts\\Header.vue'
export { default as MainPageEquipment } from '../..\\components\\main-page\\Equipment.vue'
export { default as MainPageProjects } from '../..\\components\\main-page\\Projects.vue'
export { default as MainPageServices } from '../..\\components\\main-page\\Services.vue'
export { default as MainPageVideo } from '../..\\components\\main-page\\Video.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
