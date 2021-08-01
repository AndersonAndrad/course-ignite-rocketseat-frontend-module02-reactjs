// dependencies
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
// services
import { api } from "../../services/api"
// types
type Transaction = {
  id: number,
  title: string,
  amount: number,
  category: string,
  createdAt: string,
  type: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionsContextFormat = {
  transactions: Transaction[],
  createTransaction: ( transaction: TransactionInput ) => Promise<void>,
}

export const TransactionsContext = createContext<TransactionsContextFormat>( {} as TransactionsContextFormat )

export function TransactionProvider ( { children }: TransactionsProviderProps ) {
  const [transactions, setTransactions] = useState<Transaction[]>( [] )

  useEffect( () => {
    api.get( 'transactions' ).then( ( { data } ) => { setTransactions( data.transactions ) } )
  }, [] )

  async function createTransaction ( transactionInput: TransactionInput ) {
    const response = await api.post( '/transactions', transactionInput )
    const { transaction } = response.data

    setTransactions( [...transactions, transaction] )
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions () {
  const context = useContext( TransactionsContext )

  return context
}