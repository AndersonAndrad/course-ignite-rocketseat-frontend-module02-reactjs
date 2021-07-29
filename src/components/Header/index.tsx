// images 
import logoImg from '../../assets/logo.svg'
// styled components
import { Container, Content } from './styles'


export function Header () {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type='button'>New transaction</button>
      </Content>?
    </Container>
  )
}