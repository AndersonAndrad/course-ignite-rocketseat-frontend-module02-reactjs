import { Container } from "./styles"

export function TransactionsTable () {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>software development</td>
            <td className='deposit'>R$12,00</td>
            <td>Develop</td>
            <td>02/22/2020</td>
          </tr>
          <tr>
            <td>software development</td>
            <td className='withdraw'>-R$12,00</td>
            <td>Develop</td>
            <td>02/22/2020</td>
          </tr>
          <tr>
            <td>software development</td>
            <td>R$12,00</td>
            <td>Develop</td>
            <td>02/22/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}