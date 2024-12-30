import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Login from './components/Login';
import Support from './components/Support';
import Signup from './components/Signup';
import ForgotPass from './components/ForgotPass'; 
import ResetPass from './components/ResetPass';
// import Loading from './components/Loading';

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

const SecondLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainLayout><Hero/></MainLayout>} />
      <Route path="/about" element={<MainLayout><About/></MainLayout>} />
      <Route path="/pricing" element={<MainLayout><Pricing/></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact/></MainLayout>} />
      <Route path="/bookingform" element={<MainLayout><Booking/></MainLayout>} />
      <Route path="/login" element={<SecondLayout><Login/></SecondLayout>} />
      <Route path="/Support" element={<MainLayout><Support/></MainLayout>} />
      <Route path="/signup" element={<SecondLayout><Signup/></SecondLayout>} />
      <Route path="/forgotpass" element={<SecondLayout><ForgotPass/></SecondLayout>} />
      <Route path="/resetpass" element={<SecondLayout><ResetPass/></SecondLayout>} />
    </Routes>
  </Router>
  )
}

export default App
