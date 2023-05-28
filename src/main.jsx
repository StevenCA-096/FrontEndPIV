import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './pages/_layout/Layout'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/_layout/Layout'
import ListaEmpresas from './pages/empresa/ListaEmpresas'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/empresa" element={<ListaEmpresas />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
  </QueryClientProvider>,
)
