import './EventCard.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

const EventCard = ({eventDatas}) => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent } = useContext(StoreContext);
    const [flippedCard, setFlippedCard] = useState(null);

    const toggleFlip = (id) => setFlippedCard(prevId => (prevId === id ? null : id));

    return (
        <> 
            {eventDatas
                .filter(event => event.eventType === eventType) 
                .map(event => (
                    <div key={event._id} className="card-container-events">
                        <div
                            className={`event-card ${flippedCard === event._id ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(event._id)}
                        >
                            <div className="front"> 
                                <img src={`/${event.eventSubName}.jpg`} alt="" />
                                <div className="event-card-content">
                                    <div className="card-front-top">
                                        <div className="event-card-names">
                                            <p>{event.eventName}</p>
                                            <p className='event-subname'>{event.eventSubName}</p>
                                        </div>
                                    </div>
                                    <div className="event-buttons">
                                        <button 
                                            onClick={(e) => { 
                                                selectEvent(event._id); 
                                                e.stopPropagation() 
                                            }} 
                                            className={`button-event ${selectedEvent.includes(event._id) ? 'clicked' : ''}`}
                                        >
                                            {selectedEvent.includes(event._id) ? 'EVENT ADDED' : 'ADD EVENT'}
                                        </button>

                                        <button 
                                            onClick={(e) => { 
                                                setPopUpStatus(event); 
                                                e.stopPropagation() 
                                            }} 
                                            className='view-rule-btn'
                                        >
                                            View Rules
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="back-div">
                                    <div className="card-button-back">
                                        <i 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPopUpStatus(event);
                                            }}
                                            className="fa-solid fa-circle-question fa-lg" 
                                            style={{ color: '#FFFFFF' }}
                                        ></i>
                                    </div>
                                    <div className="event-back-dec">
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default EventCard;