import DefaultTheme from 'vitepress/theme'
import Vuse from '@vuse-ui/components'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Vuse)
  }
}
