import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Customer/Home'
import CustomerLayout from './layouts/CustomerLayout'
import AdminLayout from './layouts/AdminLayout'
import About from './pages/Customer/About'
import Contact from './pages/Customer/Contact'
import Dashboard from './pages/Admin/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerLayout><Home /></CustomerLayout>}></Route>
        <Route path='/about' element={<CustomerLayout><About /></CustomerLayout>}></Route>
        <Route path='/contact' element={<CustomerLayout><Contact /></CustomerLayout>}></Route>
        <Route path='/dashboard' element={<AdminLayout><Dashboard/></AdminLayout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
