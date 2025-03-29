import { useRef } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Spotlight from '../../Components/Spotlights/Spotlights';
import TicketCards from '../../Components/TicketCards/TicketCards';
import '../../Components/MainAttractions/MainAttractions.jsx'
import MainAttractions from '../../Components/MainAttractions/MainAttractions.jsx';
import LocationComponent from '../../Components/LocationComponent/LocationComponent.jsx';


const Home = () => {
    const headerRef = useRef(null);
    const spotlightRef = useRef(null);
    const ticketsRef = useRef(null);
    const attractionRef = useRef(null);
    const locationsRef = useRef(null);

    return (
        <>
            <div className="home">
                {/* <div className='bg-anim'>
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>
                </div> */}
                
                <div ref={headerRef} className="header-container">
                    <Header />
                </div>
                <div ref={attractionRef} className="attraction-container">
                    <MainAttractions />
                </div>
                <div ref={spotlightRef} className="spotlight-container">
                    <Spotlight />
                </div>
                <div ref={ticketsRef} className="tickets-container">
                    <TicketCards />
                </div>
                <div ref={locationsRef} className="location-container">
                    <LocationComponent />
                </div>
            </div>
        </>
    );
};

export default Home;
