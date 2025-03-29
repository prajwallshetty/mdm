import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Preloader from './Components/Preloader/Preloader.jsx'

import Home from './Pages/Home/Home.jsx';
import Event from './Pages/Events/Event.jsx';
import CheckoutPage from './Pages/Checkout/Checkout.jsx';
import SuccessPage from './Pages/SuccessPage/SuccessPage.jsx'
import About from './Pages/About/About.jsx';
import VerifyTicket from './Pages/VerifyTicket/VerifyTicket.jsx';
import NotFound from './Pages/NotFound/NotFound';
import OurTeam from './Pages/OurTeam/OurTeam.jsx';
import ViewTicket from './Pages/ViewTicket/ViewTicket.jsx';

import Footer from './Components/Footer/Footer.jsx'
import TopButton from './Components/TopButton/TopButton.jsx'

import ScrollToTop from './Components/ScrolltoTop.jsx';

import { ContextProvider } from './Contexts/StoreContext.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact/Contact.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener('load', handleLoad);
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };

  }, []);

  return (
    <ContextProvider>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="app"> 
            <Navbar />
            <ToastContainer />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/events" element={<Event />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path='/about' element={<About/>}/>
              <Route path='/team' element={<OurTeam/>}/>
              <Route path='/verify' element={<VerifyTicket/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/viewticket' element={<ViewTicket/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>

            <TopButton />
          </div>
          <Footer />
        </>
      )}
    </ContextProvider>
  );
}

export default App;