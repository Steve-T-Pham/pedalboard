import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
