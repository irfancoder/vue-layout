/** @format */

// mouse.js
import { computed, h, resolveComponent } from 'vue'

export function useLayout(router) {
    const layout = computed(() => {
        /* Multi layout */
        if (Array.isArray(router.meta.layout)) {
            const layouts = router.meta.layout.reduceRight((previousLayout, currentLayout) => {
                return () =>
                    h(
                        currentLayout,
                        {},
                        {
                            default: () =>
                                h(
                                    previousLayout,
                                    {},
                                    {
                                        default: () => h(resolveComponent('router-view'), {}, {})
                                    }
                                )
                        }
                    )
            })
            return layouts
        }

        /* Single layout */
        return router.meta.layout ?? 'div'
    })
    return { layout }
}
