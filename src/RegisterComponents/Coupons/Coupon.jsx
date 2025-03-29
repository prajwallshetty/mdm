import React, { useState } from "react";
import "./Coupon.css";

const Coupon = ({ onSelectCoupon }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Coupons now contain a percentage for the discount
  const offers = [
    { id: 1, name: "10% OFF", percent: 10 },
    { id: 2, name: "20% OFF", percent: 20 },
    { id: 3, name: "30% OFF", percent: 30 },
    { id: 4, name: "40% OFF", percent: 40 },
  ];

  const handleCouponClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer.id);
    setIsDropdownOpen(false);
    onSelectCoupon(offer); // Pass the selected offer object to the parent
  };

  return (
    <div className="coupon-bar">
      <div className="coupon-header" onClick={handleCouponClick}>
        <div className="coupon-left">
          <img
            src="https://img.icons8.com/?size=100&id=63761&format=png&color=000000"
            alt="Offer Logo"
            className="offer-logo"
          />
          <span className="coupon-text">Coupons</span>
        </div>
        <div className={`coupon-right ${selectedOffer ? "checked" : ""}`}>
          {selectedOffer ? <img src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000" alt="clicked"/> : ""}
        </div>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`dropdown-item ${
                selectedOffer === offer.id ? "active" : ""
              }`}
              onClick={() => handleOfferSelect(offer)}
            >
              {offer.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coupon;
