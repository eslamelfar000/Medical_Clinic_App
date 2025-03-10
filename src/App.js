import './App.css';
import About_Us from './components/About/About_Us';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToUp from './components/ScrollToUp';
import Our_team from './components/Our-team/Out_team'
import Faq from './components/FAQ/Faq';
import Booking from './components/Booking/Booking';
import Error from './components/Error/Error';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import Forgot from './components/Login&Register/Forgot';
import Service from './components/Services/Service';
import Service_details from './components/Service-details/Service_details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToUp />
        <Routes>
          <Route path='/clinic/home' element={<Home />} />
          <Route exact path='/clinic/about' element={<About_Us />} />
          <Route exact path='/clinic/team' element={<Our_team />} />
          <Route exact path='/clinic/faq' element={<Faq />} />
          <Route exact path='/clinic/booking' element={<Booking />} />
          <Route exact path='/clinic/error' element={<Error />} />
          <Route exact path='/clinic/login' element={<Login />} />
          <Route exact path='/clinic/login/register' element={<Register />} />
          <Route exact path='/clinic/login/forgot' element={<Forgot />} />
          <Route path="/clinic" element={<Navigate to="/clinic/home" replace />} />
        </Routes>

        <Routes>
          <Route exact path='/clinic/service' element={<Service />} />
          <Route exact path='/clinic/service-details' element={<Service_details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
