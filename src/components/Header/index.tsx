// images 
import logoImg from '../../assets/logo.svg'
// styled components
import { Container, Content } from './styles'

// types
type HeaderProps = {
  onOpenNewTransactionModal: () => void,
}

export function Header ( { onOpenNewTransactionModal }: HeaderProps ) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type='button' onClick={onOpenNewTransactionModal}>New transaction</button>
      </Content>
    </Container>
  )
}