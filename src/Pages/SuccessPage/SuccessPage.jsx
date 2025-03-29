import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Save from '../../Components/Save/Save';
import Preloader from '../../Components/Preloader/Preloader'
import './SuccessPage.css';

const SuccessPage = () => {
    const location = useLocation();
    const { participantId, orderId } = location.state || {};
    const [isTicketOverlayVisible, setIsTicketOverlayVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const imgSrc = `https://sambhram-tickets-bucket.s3.ap-south-1.amazonaws.com/tickets/${orderId}.jpg`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleViewTicketClick = () => {
        setIsTicketOverlayVisible(true);
    };

    const handleCloseClick = () => {
        setIsTicketOverlayVisible(false);
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(imgSrc);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Sambhram_Ticket_${orderId}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try again.');
        }
    };

    if (isLoading) {
        return (
            <Preloader />
        );
    }

    return (
        <>{
            orderId ? <div className="success-page">
                {isTicketOverlayVisible && (
                    <div className="ticket-overlay">
                        <div className="ticket">
                            <img
                                src={imgSrc}
                                alt="Ticket"
                            />
                            <div className="ticket-button-flex">
                                <i
                                    onClick={handleCloseClick}
                                    className="fa-solid fa-xmark"
                                    style={{ color: '#ff3838', cursor: 'pointer' }}
                                >
                                </i>
                            </div>
                        </div>
                        <div className="save-flex">
                            <div className="download-div">
                                <div onClick={handleDownload} style={{ cursor: 'pointer' }}>
                                    <Save />
                                </div>
                                <p>Click to download</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="success-component">
                    <div className="flying-lantern">
                        <img src="flying-lantern.png" alt="Flying Lantern" />
                    </div>
                    <div className="flying-lantern">
                        <img src="flying-lantern.png" alt="Flying Lantern" />
                    </div>
                    <div className="flying-lantern">
                        <img src="flying-lantern.png" alt="Flying Lantern" />
                    </div>
                    <div className="success-up">
                        <img src="success.png" alt="Checkmark" />
                        <h2>Registered successfully</h2>
                        <p>Click the Button to View and Download the Ticket</p>
                        <p className='team-event-warning'>Don't forget to bring your ticket !!!</p>
                    </div>
                    <div className="success-down">
                        <div className="success-btn-container">
                            <a className="button type--C" onClick={handleViewTicketClick}>
                                <div className="button__line"></div>
                                <div className="button__line"></div>
                                <span className="button__text">View Ticket</span>
                                <div className="button__drow1"></div>
                                <div className="button__drow2"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> :


                <div className="error">
                    <div className="error-div">
                        <img src="error.jpg" height="70px" alt="" />
                        <p>Error in generating ticket</p>
                        <p> Please contact us </p>
                        <p>+91 75103 24437</p>
                        <p>+91 81050 48276</p>
                    </div>

                </div>
        }

        </>
    );
};

export default SuccessPage;