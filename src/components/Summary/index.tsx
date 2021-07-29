// images
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
// styled components
import { Container } from "./styles"


export function Summary () {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$1000,00 </strong>
      </div>
      <div>
        <header>
          <p>Income</p>
          <img src={outComeImg} alt="outCome" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Income</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00 </strong>
      </div>
    </Container>
  )
}