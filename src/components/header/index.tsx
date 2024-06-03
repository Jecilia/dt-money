import { HeaderContainer, HeaderContent, NewTransitionButton } from './styles'
import logo from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <NewTransitionButton>Nova Transação</NewTransitionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
