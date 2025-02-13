import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';
import Layout from './layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout></Layout>} >
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
