import './EventPopup.css'
import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';

const EventPopup = () => {
    const { setPopUpStatus, popUpStatus, selectEvent, selectedEvent } = useContext(StoreContext);

    return (
        <div key={popUpStatus._id} onClick={() => setPopUpStatus('')} className={`event-popup-container ${popUpStatus ? 'show' : ''}`}>
            <div className="event-popup" onClick={(e) => e.stopPropagation()}>
            <img src="/bg-Cultural-phone.jpg" alt="" />
                <div className="close-icon">
                    <i onClick={() => setPopUpStatus('')} className="fa-solid fa-xmark fa-xl" style={{ color: '#ffffff' }}></i>
                </div> 
                <div className="event-content">
                    <div className='pop-main'>
                        {popUpStatus && typeof popUpStatus === 'object' ? (
                            <>  
                                <h3 className="event-name">{popUpStatus.eventName}</h3>
                                {popUpStatus.eventSubName}
                                <p className="event-desc">{popUpStatus.description}</p>


                                <div className="rule-box">
                                    <h3>Rules</h3>
                                    <div className="rules">
                                        {popUpStatus.rules && popUpStatus.rules.map((rule, index) => (
                                            <div>
                                                <div className="rule">
                                                  <p>&#10140;&nbsp;</p>  <p key={index}> {rule}</p>
                                                </div>

                                            </div>

                                        ))}
                                    </div>

                                </div>

                                <div className="coordinator-details">
                                    <div className="item-flex-popup">
                                        <p className="event-time">{popUpStatus.time}</p>
                                        <p className="event-time">{popUpStatus.date}</p>
                                    </div>
                                    <div className="item-flex-popup">
                                        <p>Venue</p><p>{popUpStatus.venue}</p>
                                    </div>



                                    <div className="item-flex-popup">
                                        <p>{popUpStatus.studentCoordinator}</p><p>{popUpStatus.studentCoordinatorContact}</p>
                                    </div>
                                    </div>
                                    {selectedEvent.includes(popUpStatus._id) ? (
                                        <button className='event-selected-button' onClick={() => selectEvent(popUpStatus._id)}>Remove</button>
                                    ) : (
                                        <button className='event-select-button' onClick={() => selectEvent(popUpStatus._id)}>Select</button>
                                    )}
                                
                            </>
                        ) : (
                            <p>No event selected.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPopup;
