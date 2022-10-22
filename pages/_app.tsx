import { memo } from "react"

import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"

import { theme } from "@styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default memo(MyApp)
