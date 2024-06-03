import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateCustomerPage from './pages/CreateCustomerPage';
import CustomerListPage from './pages/CustomerListPage';
import CreateBarberPage from './pages/CreateBarberPage';
import BarberListPage from './pages/BarberListPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';



function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/customers" element={<CustomerListPage />} />
      <Route path="/customers/new" element={<CreateCustomerPage />} />
      <Route path="/barbers" element={<BarberListPage />} />
      <Route path="/barbers/new" element={<CreateBarberPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />

    </Routes>
  )
}

export default App
