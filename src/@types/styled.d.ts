import 'styled-components'
import { themes } from '~/theme'

declare module 'styled-components' {
  type ThemeType = typeof themes.dark

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
