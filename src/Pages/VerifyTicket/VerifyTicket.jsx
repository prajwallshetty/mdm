import './VerifyTicket.css';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { StoreContext } from '../../Contexts/StoreContext';
import Preloader from '../../Components/Preloader/Preloader'

const VerifyTicket = () => {
    const { eventDatas } = useContext(StoreContext);
    const [verificationMessage, setVerificationMessage] = useState('Verifying...');
    const [isError, setIsError] = useState(false);
    const [items, setItems] = useState([]);
    const [participantData, setParticipantData] = useState(null);

    const location = useLocation(); // Get the current location object
    const searchParams = new URLSearchParams(location.search); // Parse query parameters
    const id = searchParams.get('id'); // Get the `id` from query parameters

    let currentCoupon = items.length === 4 ? "DRAGON"
        : items.length === 3 ? "FLAME"
            : items.length === 2 ? "FANG"
                : "EMBER";

    useEffect(() => {
        const verifyTicket = async () => {
            if (!id) {
                setVerificationMessage("No Participant ID provided");
                setIsError(true);
                return;
            }

            try {
                const verifyResponse = await axios.post(
                    "https://o83h8nltlc.execute-api.ap-south-1.amazonaws.com/api/v1/auth/verify/ticket",
                    { id }
                );

                const participant = verifyResponse.data;
                setParticipantData(participant);

                if (!participant || !participant.registrations) {
                    console.error('No participant or registration data');
                    return;
                }

                const registeredEventIds = participant.registrations.map(reg => reg.event_id);
                console.log('Registered Event IDs:', registeredEventIds);

                const filteredEvents = eventDatas.filter(event =>
                    registeredEventIds.includes(event._id)
                );
                console.log('Filtered Events:', filteredEvents);

                // Set the filtered events to state
                setItems(filteredEvents);

                // Set verification message
                if (verifyResponse.data) {
                    setVerificationMessage("PARTICIPANT IS VALID");
                    setIsError(false);
                } else {
                    setVerificationMessage("Invalid Participant");
                    setIsError(true);
                }
            } catch (error) {
                console.error("Verification Error:", error);
                setIsError(true);
                setVerificationMessage("Verification Failed");
            }
        };

        if (eventDatas && eventDatas.length > 0) {
            verifyTicket();
        }
    }, [id, eventDatas]);

    return (
        <div className="verify-ticket">
            <div className="verification-container">
                <div className="participant-details">
                    {participantData ? <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-shabby-stamp-with-inscription-verified-trusted-seal-label-vector-picture-image_9855465.png" alt="" /> : <p><img className='unverified-image' src="https://static.vecteezy.com/system/resources/previews/009/384/246/non_2x/tick-and-cross-clipart-design-illustration-free-png.png" alt="" /></p>}

                    <h3>{participantData ? "PARTICIPANT DETAILS" : ""}</h3>
                    {participantData ?
                        <>
                            <p>{participantData._id || 'N/A'}</p>
                            <div className="participant-detail">
                                <p>Name</p>
                                <p>{participantData.name || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <p>Phone</p>
                                <p>{participantData.phone || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <p>USN</p>
                                <p>{participantData.usn || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <p>College</p>
                                <div className="college-name">
                                <p>{participantData.college || 'N/A'}</p>
                                </div>
                            </div>
                            
                           
                        </> : <div className="spinner"></div>
                    }
                </div>
                {participantData ? <div className="participated-events">
                    <h4>REGISTERED EVENTS</h4>
                    <div className="events-list">
                        {items && items.length > 0 ? (
                            items.map((event, index) => (
                                <>
                                    <div className="participant-events-list">
                                        <b>{event.eventName}</b>
                                        <div className="participated-event" key={event._id}>
                                            <p>Date</p>
                                            <p>
                                                {event.date}
                                            </p>
                                        </div>
                                        <div className="participated-event">
                                            <p>Time</p>

                                            <p>{event.time}</p>
                                        </div>
                                        <div className="participated-event">
                                            <p>Venue</p>

                                            <p>{event.venue}</p>
                                        </div>
                                        <div className="participated-event">
                                            <p>Student Coordinater</p>

                                            <p>{event.studentCoordinator}</p>
                                        </div>
                                        <div className="participated-event">
                                            <p>Contact</p>

                                            <p>{event.studentCoordinatorContact}</p>
                                        </div>


                                    </div>

                                </>

                            ))
                        ) : (
                            <p>No events found</p>
                        )}
                    </div>
                </div> :
                    <></>}


            </div>
        </div>
    );
};

export default VerifyTicket;
