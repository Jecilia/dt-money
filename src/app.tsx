import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}
