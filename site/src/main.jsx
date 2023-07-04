import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { UsuarioProvider } from './context/UsuarioContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <UsuarioProvider>
      <App/>
    </UsuarioProvider>
  </React.Fragment>
)