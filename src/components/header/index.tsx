import { HeaderContainer, HeaderContent, NewTransitionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../new-transaction-modal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransitionButton>Nova Transação</NewTransitionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
