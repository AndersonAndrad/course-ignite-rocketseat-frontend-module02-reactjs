// dependencies
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
// images
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
// contexts
import { useTransactions } from '../hooks/useTransactions'
// styled components
import { Container, RadioBox, TransactionTableContainer } from './styles'
// types
type NewTransactionModalProps = {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function NewTransactionModal ( { isOpen, onRequestClose }: NewTransactionModalProps ) {
  const [type, setType] = useState( 'deposit' )
  const [title, setTitle] = useState( '' )
  const [amount, setAmount] = useState( 0 )
  const [category, setCategory] = useState( '' )

  const { createTransaction } = useTransactions()

  async function handleCreateTransaction ( event: FormEvent ) {
    event.preventDefault()
    onRequestClose()

    // return all values to default
    setType( 'deposit' )
    setTitle( '' )
    setAmount( 0 )
    setCategory( '' )

    createTransaction( {
      amount,
      category,
      title,
      type,
    } )
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="close modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Register transaction</h2>
        <input
          placeholder='Title'
          value={title}
          onChange={event => setTitle( event.target.value )}
        />
        <input
          type="number"
          placeholder='Value'
          value={amount}
          onChange={event => setAmount( Number( event.target.value ) )}
        />
        <TransactionTableContainer>
          <RadioBox
            onClick={() => setType( 'deposit' )}
            isActive={type === 'deposit'}
            activeColor='green'
            type='button'
          >
            <img src={incomeImg} alt="income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            onClick={() => setType( 'withdraw' )}
            isActive={type === 'withdraw'}
            activeColor='red'
            type='button'
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTableContainer>

        <input
          placeholder='Category'
          value={category}
          onChange={event => setCategory( event.target.value )}
        />
        <button type='submit'>Register</button>
      </Container>
    </Modal>
  )
}