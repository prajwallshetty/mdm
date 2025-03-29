import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './ViewTicket.css';
import { StoreContext } from '../../Contexts/StoreContext';
import Preloader from '../../Components/Preloader/Preloader';
import { toast } from 'react-toastify';

const ViewTicket = () => {
    const { stOrderId } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    console.log(stOrderId);
    
    const handleImageError = (e) => {
        e.target.src = '/path/to/placeholder/image.png'; // Replace with your placeholder
        e.target.onerror = null;
    };

    if (loading) {
        return (
           <div className="error-container">
            <div className="spinner"></div>
           </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
            </div>
        );
    }

    return (
        <div className="view-ticket-container">
            {stOrderId ? (
                <div className="view-tickets">
                    {stOrderId.map(ticket => (
                        <div className="ticket margtop">
                            <img
                                src={`https://sambhram-tickets-bucket.s3.ap-south-1.amazonaws.com/tickets/${ticket}.jpg`}
                                alt={`Ticket for event `}
                                onError={handleImageError}
                                className="ticket-image"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-tickets">
                    <p>No tickets found.</p>
                </div>
            )}
        </div>
    );
};

export default ViewTicket;