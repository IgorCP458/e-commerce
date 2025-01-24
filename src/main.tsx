import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Categorias } from './components/Categorias/index.tsx'
import { Ofertas } from './components/Ofertas/index.tsx'
import { Carrinho } from './components/Carrinho/index.tsx'
import { Vender } from './components/Vender/index.tsx'
import { Conta } from './components/Conta/index.tsx'
import { Home } from './components/Home/index.tsx'
import { Menu } from './components/Menu/index.tsx'
import { Footer } from './components/Footer/index.tsx'
import { Contato } from './components/Contato/index.tsx'
import { Desenvolvedores } from './components/Desenvolvedores/index.tsx'
import { Sobre } from './components/Sobre/index.tsx'
import { Termos } from './components/Termos/index.tsx'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <div className="flex-col bg-slate-200 h-screen">
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/ofertas" element={<Ofertas/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/vender" element={<Vender/>}/>
          <Route path="/conta" element={<Conta/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/desenvolvedores" element={<Desenvolvedores/>}/>
          <Route path="/termos" element={<Termos/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>,
)
