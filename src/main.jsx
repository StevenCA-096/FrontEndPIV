import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './pages/_layout/Layout'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/_layout/Layout'
import ListaEmpresas from './pages/empresa/ListaEmpresas'
import ListaOfertas from './pages/oferta/ListaOfertas'
import ListaCandidatos from './pages/candidato/ListaCandidatos'
import Home from './pages/home/Home'
import Editar from './pages/candidato/components/Editar'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/home" element={<Home />} /> 
         <Route path="/empresa" element={<ListaEmpresas />} />
         <Route path="/oferta" element={<ListaOfertas />} />
         <Route path="/candidato" element={<ListaCandidatos />} />
         <Route path="/candidato/components/:id" element={<Editar />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
  </QueryClientProvider>,
)
