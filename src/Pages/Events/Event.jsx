import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import EventNav from "../../Components/EventNav/EventNav";
import EventCard from "../../Components/EventCard/EventCard";
import EventPopup from "../../Components/EventPopup/EventPopup";
import RegisterButton from "../../Components/RegisterButton/RegisterButton";
import "./Event.css";

const Event = () => {
    const { eventType, selectedEvent, eventDatas } = useContext(StoreContext);
    const [bgImage, setBgImage] = useState("bg-Cultural.jpg");
    const isMobile = window.innerWidth <= 700;
    
    useEffect(() => {
        let image_bg = isMobile ? `bg-${eventType}-phone.jpg` : `bg-${eventType}.jpg`;
        setBgImage(image_bg)
    }, [eventType]);

    const isRegisterButtonVisible = selectedEvent.length > 0;

    return (
        <div className="event">
            <EventNav />
            <div className="bg-image-events">
                <img key={bgImage} src={bgImage} alt="Event Background" />
                <div className="bg-event-layer">

                </div>
            </div>
            <div className="event-container">
                <h1 className="event-type-heading">{eventType}</h1>
                {eventDatas.length == 0 ? 
                <div className="event-loading">
                    <div className="spinner">

                    </div>
                </div>:
                <></>}
                <div className="event-card-container">
                    <EventCard eventDatas={eventDatas} />
                    <EventPopup />
                </div>
                {isRegisterButtonVisible && <RegisterButton />}
            </div>
        </div>
    );
};

export default Event;
