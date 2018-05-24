import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/root-reducer'
import Header from './components/header/header-container'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render((
  <Provider store={ createStoreWithMiddleware }>
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'))
registerServiceWorker()
