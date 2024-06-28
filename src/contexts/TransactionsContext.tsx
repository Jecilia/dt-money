import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}
export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}
export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function fetchTransactions(query?: string) {
    const url = new URL ('http://localhost:3000/transactions')
    if (query) {
      url.searchParams.append('q', query)
    }
    const response = await fetch(url)
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
   fetchTransactions()
  }, [fetchTransactions])
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
