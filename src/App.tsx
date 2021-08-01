// dependencies
import { useState } from 'react'
import Modal from 'react-modal'
// shared components
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
// contexts
import { TransactionProvider } from './components/hooks/useTransactions'
// modal
import { NewTransactionModal } from './components/NewTransactionModal'
// styled components
import { GlobalStyle } from "./styles/global"
Modal.setAppElement( '#root' )

export function App () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState( false )

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen( true )
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen( false )
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  )
}
