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
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About_Us />} />
          <Route exact path='/team' element={<Our_team />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/booking' element={<Booking />} />
          <Route exact path='/error' element={<Error />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/login/register' element={<Register />} />
          <Route exact path='/login/forgot' element={<Forgot />} />
          <Route path="/" element={<Navigate to="/" replace />} />
        </Routes>

        <Routes>
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/service-details' element={<Service_details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
