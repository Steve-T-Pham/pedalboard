import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)
