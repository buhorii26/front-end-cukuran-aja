import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateCustomerPage from "./pages/CreateCustomerPage";
import CustomerListPage from "./pages/CustomerListPage";
import CreateBarberPage from "./pages/CreateBarberPage";
import CreateServicePage from "./pages/CreateServicePage";
import DashboardCustomerPage from "./pages/dashboard-customer/DashboardCustomerPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/services/ServicePage";
import DetailBarberPage from "./pages/dashboard-barber/DetailBarberPage";
import DetailServicePage from "./pages/services/DetailServicePage";
import CreateBookingPage from "./pages/bookings/CreateBookingPage";
import BookingListPage from "./pages/bookings/BookingListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/customers" element={<CustomerListPage />} />
      <Route path="/customers/new" element={<CreateCustomerPage />} />
      <Route path="/customers/dashboard" element={<DashboardCustomerPage />} />
      <Route path="/bookings" element={<BookingListPage />} />
      <Route path="/barbers/new" element={<CreateBarberPage />} />
      <Route path="/bookings/new" element={<CreateBookingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/new" element={<CreateServicePage />} />
      <Route path="/barbers/:id" element={<DetailBarberPage />} />
      <Route path="/services/:id" element={<DetailServicePage />} />
    </Routes>
  );
}

export default App;
