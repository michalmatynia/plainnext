import * as React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import createEmotionCache from '@lib/emotion/createEmotionCache'

import lightThemeOptions from '../../styles/theme/lightThemeOptions'
import '../../styles/globals.css'
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
/* ORIGINAL CODE */
// // import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import { red } from '@mui/material/colors'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// })

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }
