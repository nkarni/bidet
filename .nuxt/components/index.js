export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as BiasTab } from '../../components/biasTab.vue'
export { default as CountTag } from '../../components/countTag.vue'
export { default as DatasetTab } from '../../components/datasetTab.vue'
export { default as LandingLeftSide } from '../../components/landingLeftSide.vue'
export { default as MultiSelect } from '../../components/multiSelect.vue'
export { default as ReportTab } from '../../components/reportTab.vue'
export { default as ReviewTab } from '../../components/reviewTab.vue'
export { default as TestTab } from '../../components/testTab.vue'
export { default as Toggle } from '../../components/toggle.vue'
export { default as LazyEmbed } from '../../components/Lazy/Embed.vue'
export { default as LazyImg } from '../../components/Lazy/Img.vue'

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
