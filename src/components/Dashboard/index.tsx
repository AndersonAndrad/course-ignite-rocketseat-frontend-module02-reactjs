// shared components
import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
// styled components
import { Container } from "./styles"

export function Dashboard () {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}