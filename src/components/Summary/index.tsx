// images
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
// contexts
import { useTransactions } from '../hooks/useTransactions'
// styled components
import { Container } from "./styles"

export function Summary () {
  const { transactions } = useTransactions()

  const summary = transactions.reduce( ( accumulator, transactions ) => {
    if ( transactions.type === 'deposit' ) {
      accumulator.deposits += transactions.amount
      accumulator.total += transactions.amount
    } else {
      accumulator.withdraws += transactions.amount
      accumulator.total -= transactions.amount
    }

    return accumulator
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  } )

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>
          {
            new Intl.NumberFormat( 'pt-BR', {
              style: 'currency',
              currency: 'BRL',
            } ).format( summary.deposits )
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Withdraw</p>
          <img src={outComeImg} alt="outCome" />
        </header>
        <strong>
          {
            new Intl.NumberFormat( 'pt-BR', {
              style: 'currency',
              currency: 'BRL',
            } ).format( summary.withdraws )
          }
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat( 'pt-BR', {
              style: 'currency',
              currency: 'BRL',
            } ).format( summary.total )
          }
        </strong>
      </div>
    </Container>
  )
}