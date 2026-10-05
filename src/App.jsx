import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Contact from './assets/pages/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="site-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
         {new Date().getFullYear()} Jesse Sergent
      </footer>
    </div>
  )
}
