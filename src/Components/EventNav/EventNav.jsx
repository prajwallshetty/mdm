import './EventNav.css'
import React,{useContext} from 'react'
import { StoreContext } from '../../Contexts/StoreContext';
 
const EventNav = ()=>{
    const {setEventType,eventType} = useContext(StoreContext);
    return(
        
        <>
        <div className="event-nav-container">
        <div className="event-nav">
            <div className={`event-nav-type ${eventType=="Technical"?'active':''}`} onClick={()=>setEventType("Technical")}>
                <p>TECHNICAL</p>
            </div>
            <div className={`event-nav-type ${eventType=="Cultural"?'active':''}`}  onClick={()=>setEventType("Cultural")}>
                <p>CULTURAL</p>
            </div>
            <div className={`event-nav-type ${eventType=="Special"?'active':''}`} onClick={()=>setEventType("Special")}>
                <p>SPECIAL</p>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default EventNav;