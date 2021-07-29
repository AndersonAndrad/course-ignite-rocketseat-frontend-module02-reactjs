// dependencies
// mock
import { createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
// shared components
import { App } from './App'

createServer( {
  routes () {
    this.namespace = 'api'

    this.get( '/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 01',
          amount: 400,
          type: 'deposit',
          category: 'food',
          date: new Date( '2017-01-01' )
        }
      ]
    } )
  }
} )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
)