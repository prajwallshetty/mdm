import React, { useRef, useEffect } from 'react';
import './PopularEvents.css';

const PopularEvents = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; 

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 10);

  
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="popular-event-section">
      <div className="popular-event-heading">
        <h1>Featured Events</h1>
      </div>

      <div className="popular-events" ref={scrollRef}>
      
        <div className="popular-event">Event 1</div>
        <div className="popular-event">Event 2</div>
        <div className="popular-event">Event 3</div>
        <div className="popular-event">Event 4</div>
        <div className="popular-event">Event 5</div>
        <div className="popular-event">Event 6</div>
        <div className="popular-event">Event 7</div>
      </div>

      <div className="popular-event-heading">

      </div>
    </div>
  );
};

export default PopularEvents;
