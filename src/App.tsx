// shared components
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
// styled components
import { GlobalStyle } from "./styles/global"

export function App () {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
