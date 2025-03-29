import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectedItemSection.css'
import TicketCards from '../../Components/TicketCards/TicketCards';

const SelectedItemSection = ({ items }) => {

  const { selectEvent } = useContext(StoreContext)
  const [couponFlex, ShowCouponFlex] = useState(false);

  const handleShowCoupon = () => {
    ShowCouponFlex(!couponFlex)
  }
  const totalAmount = items.length * 100;
  let couponDiscount = 0;
  let currentCoupon = null;

  couponDiscount = items.length === 4 ? 150
    : items.length === 3 ? 80
      : items.length === 2 ? 40
        : 0;

  currentCoupon = items.length === 4 ? "DRAGON"
    : items.length === 3 ? "FLAME"
      : items.length === 2 ? "FANG"
        : "EMBER";


  const grandTotal = totalAmount - couponDiscount;



  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate('/events');
  };
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
    <div className="items-section">
      {
        couponFlex ? <div className="show-coupons-flex">

          <div className="show-coupons">
            <div className="coupon-close">
              <i onClick={handleShowCoupon} className="fa-solid fa-xmark fa-xl"></i>
            </div>
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
          </div>
        </div> :
          <></>
      }

      <h4>SELECTED EVENTS</h4>
      <div className="item-rows">
        {items.map((item) => (
          <div className="item-row" key={item._id}>
            <div className="items">
              <span className="name">{item.eventName}</span>
              <span className="price">₹ 100</span>
            </div>
            <div className="cancel">
              <i className="fa-solid fa-xmark" onClick={() => selectEvent(item._id)} style={{ color: '#a30000' }}></i>
            </div>
          </div>
        ))
        }
      </div>
      <div className="coupon-desc-section">
        {items.length < 4 && (
          <div className="coupon-desc">
            <p>Add {4 - items.length} More Events & Get ₹150 Flat Discount!</p>
          </div>
        )}
        <div className="btn-section">
          <button onClick={handleShowCoupon}>
            View Coupons
          </button>
          <button onClick={handleAddMore}><i className="fa-solid fa-plus" ></i>&nbsp;Add more events</button>
        </div>

        {/* <div className="addMore" onClick={handleAddMore}>
        <i className="fa-solid fa-plus" ></i>&nbsp;Add more events
      </div> */}
      </div>

      <div className="receipt-section">
        <div className="current-ticket-section">

          {
            <img src={
              currentCoupon === "DRAGON" ? "dragon_thumb.png" : currentCoupon === "FLAME" ? "flame_thumb.png" : currentCoupon === "FANG" ? "fang_thumb.png" : "ember_thumb.png"
            } alt="" />
          }

        </div>

        <div className="total">
          <div className='price'>Total: <p>₹ {totalAmount}</p></div>
          {<div className='price'>{currentCoupon} Pass discount :  <p>{couponDiscount}</p></div>}
          <div className="grand-total price">Grand Total: <p>₹{grandTotal}</p></div>
        </div>
      </div>

    </div>
  )
}

export default SelectedItemSection;