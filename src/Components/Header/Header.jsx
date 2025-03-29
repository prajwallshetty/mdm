import { useCallback } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Countdown from '../Countdown/Countdown.jsx';

const Header = () => {
    const scrollToSpotlight = useCallback(() => {
        window.scrollTo({
            top: window.innerHeight + 10,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>

<div>
<div className="invite-container">  
                <video
                    className="head-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source
                        src="/0327.mp4"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="header-overlay">
                </div>

                <div className='content'>
                    <div className="main-contents">
                        <h1 className="title-sd"></h1>
                        <h1 className="title">AAKAR&apos;25</h1>
                        <p className="description">
                            At AJ Institute Of Engineering And Technology
                        </p>
                        <p className="date">On 6 <p className='th'> th</p> &  7 <p className='th'>th</p> May 2025</p>

                        <div className='btn-width'>
                            <Link to='/about'><button className='explore-btn'>Explore</button></Link>
                            
                            <Link to='/events'><button className='glowing-btn'>Register</button></Link>
                        </div>

                    </div>

                    <div className="middle">
                        <Countdown targetDate="2025-05-08" />
                    </div>
                    <button onClick={scrollToSpotlight} className="down-button">
                        <p>click here</p>
                        <i className="fa-duotone fa-solid fa-angles-down"></i>
                    </button>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Header;
