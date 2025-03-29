import React from 'react'
import './ConfirmSection.css'
import PayButton from '../PayButton/PayButton'

const ConfirmSection = ({ items, couponDiscount, totalAmount, grandTotal, setConfirm, step, confirmPayment }) => {
    
    return (
        <>
            <div className="confirm-flex">
                <div className="confirm-div">

                    <div className="close-confirm">
                        <i onClick={setConfirm} className="fa-solid fa-xmark"></i>
                    </div>
                    <h3>Confirm payment</h3>

                    <div className="confirm-price-section">
                        <h4>Selected events</h4>
                        {items && items.length > 0 ? (
                            items.map((item, index) => (
                                <div className="confirm-price" key={index}>
                                    <p>{item.eventName}</p>
                                    <p><i className="fa-solid fa-indian-rupee-sign">&nbsp;</i>{item.price || 100}</p>
                                </div>
                            ))
                        ) : (
                            <p>No items selected.</p>
                        )}
                    </div>

                    <div className="confirm-price-section">
                        <h4>Price</h4>
                        <div className="confirm-price">
                            <p>Total amount</p> <p><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{totalAmount}</p>
                        </div>
                        <div className="confirm-price">
                            <p>Coupon discount</p> <p><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{couponDiscount}</p>
                        </div>
                        <div className="confirm-price">
                            <p>Grand Total</p> <p className='grand-total-final'><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{grandTotal}</p>
                        </div>
                    </div>
                    <div className="confirm-payment-button">
                        <PayButton btnText={"Pay Now"} btnFunction={confirmPayment} step={step} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmSection