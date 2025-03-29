import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import RightDrawerMenu from '../RightDrawerMenu/RightDrawerMenu';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Hook to track the current path

    // Function to get the scroll threshold based on the current page path
    const getScrollThreshold = () => {
        if (location.pathname === '/') {
            return 88; // Scroll effect only on Home page (88vh threshold)
        }
        return 0; // Always show the color on other pages
    };

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPositionVh = (window.scrollY / window.innerHeight) * 100; // Calculate scroll position in vh
        const threshold = getScrollThreshold(); // Get the appropriate scroll threshold

        if (scrollPositionVh > threshold) {
            setScrolled(true); // Set scrolled to true when the page is scrolled past the threshold
        } else {
            setScrolled(false); // Set scrolled to false when the page is above the threshold
        }
    };

    // Set up the scroll event listener
    useEffect(() => {
        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener on component unmount or when path changes
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]); // Re-run when location changes
 
    // Define the menu items
    const navItems = [
        { id: 'home', path: '/', label: 'Home' },
        { id: 'event', path: '/events', label: 'Event' },
        { id: 'contact', path: '/contact', label: 'Contact Us' },
        { id: 'team', path: '/team', label: 'Our Team' },
        { id: 'about', path: '/about', label: 'About Us' },
    ];

    // Determine the navbar class based on scrolled state and current page
    const getNavbarClass = () => {
        if (location.pathname === '/') {
            // On the Home page, apply transparent or scrolled class
            return scrolled ? 'navbar scrolled' : 'navbar transparent';
        } else {
            // On other pages, always apply other-page class
            return 'navbar other-page';
        }
    };

    return (
        <div className={getNavbarClass()}>
            <div className="navbar-left">
                <Link to='/' onClick={() => setMenu('home')}>
                    <img src="/AAAAA.png" />
                </Link>
            </div>
            <div className="navbar-right">
                <div className="nav-items">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setMenu(item.id)}
                            className={menu === item.id ? 'menu-active' : ''}
                        >
                            {item.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
                <RightDrawerMenu />
            </div>
        </div>
    );
};

export default Navbar;
