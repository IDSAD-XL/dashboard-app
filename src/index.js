import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
