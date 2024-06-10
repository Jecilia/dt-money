import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
