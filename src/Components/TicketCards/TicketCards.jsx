import './TicketCards.css';
import { Link } from 'react-router-dom';

const TicketCards = () => {
    const tickets = [
        {
            ticket_name: "EMBER PASS",
            ticket_image: "Ember Pass.png",
            description: "Start your fest journey! Choose 1 event from performances or tech showcases. Perfect for focused enthusiasts seeking their spotlight moment!"
        },
        {
            ticket_name: "FANG PASS", 
            ticket_image: "Fang Pass.png",
            description: "Double your fest experience! Pick any 2 exciting events with ₹40 savings. Showcase your versatility across different platforms and shine bright!"
        },
        {
            ticket_name: "FLAME PASS",
            ticket_image: "Flame Pass.png",
            description: "Triple the excitement! Access 3 spectacular shows with a stunning ₹80 discount. From stage performances to tech innovations - embrace the diversity!"
        },
        {
            ticket_name: "DRAGON PASS",
            ticket_image: "Dragon Pass.png",
            description: "Ultimate fest experience! Select any 4 events with a massive ₹150 discount. Mix performances and tech shows - create your perfect festival adventure!"
        }
     ]

    return (
        <div className="ticket-cards">  
            <div className="ticket-heading">
                <h2>GRAB YOUR TICKETS</h2>
            </div>
            <Link to='/events'>
            <div className="ticket-card-list">
                {tickets.map((src, index) => (
                    <div className="ticket-card-view" key={index}>
                        <div className="ticket-card-overview">
                            
                            <h6>{src.ticket_name}</h6>
                            <p>{src.description} </p>

                        </div>
                        <img src={src.ticket_image} alt={`Ticket ${index + 1}`} />
                    </div>
                ))}
            </div>
            </Link>
            
        </div>
    );
};

export default TicketCards;
