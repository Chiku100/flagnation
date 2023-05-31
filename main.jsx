import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Provider from './MyContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  ,
)
