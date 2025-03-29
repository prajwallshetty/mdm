import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { StoreContext } from '../../Contexts/StoreContext';
import SelectedItemSection from '../../RegisterComponents/SelectedItemSection/SelectedItemSection';
import RegistrationForm from '../../RegisterComponents/RegistrationForm/RegistrationForm';
import { toast } from 'react-toastify';
import PayButton from '../../RegisterComponents/PayButton/PayButton';
import Preloader from '../../Components/Preloader/Preloader';
import ConfirmSection from '../../RegisterComponents/ConfirmSection/ConfirmSection';

const CheckoutPage = () => {
  const { selectedEvent, setSelectedEvent, eventDatas, setAmount, amount, payNow, step, data, setStep } = useContext(StoreContext);

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [confirmSection, setConfirmSection] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Spinner loading state


  const items = eventDatas.filter(event => selectedEvent.includes(event._id));
  
  const navigate = useNavigate();
 
  const totalAmount = items.length * 100;
  let couponDiscount = 0;

  couponDiscount = items.length === 4 ? 150
    : items.length === 3 ? 80
      : items.length === 2 ? 40
        : 0;

  const grandTotal = totalAmount - couponDiscount;

  useEffect(() => {
    setAmount(() => grandTotal)
    console.log(amount)
  }, [grandTotal]);

  if (selectedEvent.length == 0) {
    navigate('/events');
  }

  const handleContinue = () => {
    if (step < 2) {
      setStep(step + 1);
    }
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    else {
      navigate('/events');
    }
  };

  const validateForm = () => {

    if (data.college === "Other") {
      data.college = data.Othercollege
    }

    if (!data.name || !data.usn || !data.college || !data.mobile || data.college == "Other") {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!/^\d{10}$/.test(data.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setConfirm();

  }
  const setConfirm = () => {
    setConfirmSection(!confirmSection);
  }


  const confirmPayment = async () => {
    setIsLoading(true)
    const confirmRes = await payNow();
    setIsLoading(false)

  }




  return (
    <div className="checkout-flex">
      {/* <div className="back" onClick={handleBack}>
        <i className="fa-solid fa-circle-chevron-left fa-2xl" style={{ color: "#d53810" }}></i>
      </div> */}
      <div className="checkout-container">
        <img className='checkout-container-img' src="Bg-reg.jpg" alt="" />
        <div className="steps">
          <div className="step">
            <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-title ${step >= 1 ? 'active' : ''}`}>Checkout</div>
          </div>
          <div className="step">
            <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-title ${step >= 2 ? 'active' : ''}`}>Register</div>
          </div>
        </div>

        {step === 1 &&
          <SelectedItemSection items={items} />
        }

        {step === 2 &&
          <RegistrationForm />
        }
      </div>
      {
        confirmSection &&
        <>
         <ConfirmSection items={items} totalAmount={totalAmount} couponDiscount={couponDiscount} grandTotal={grandTotal} setConfirm={setConfirm} step={step} confirmPayment={confirmPayment}/>
        </>
       
      }

      {isLoading &&
        <div className="spinner-overlay">
          <Preloader />
        </div>
      }

      <div className="continue-panel">
        <div className="terms">
          <i onClick={handleBack} className="fa-solid fa-arrow-left fa-lg" style={{ color: "#ffffff" }}></i>
          <i onClick={() => setSelectedEvent(() => [])} className="fa-solid fa-trash" style={{ color: "#ffffff" }}></i>
        </div>

        <div className="continue-section">
          {
            step === 1 ?
              <PayButton btnFunction={handleContinue} btnText={"Continue"} step={step} /> :
              <PayButton btnFunction={validateForm} btnText={"Confirm"} />
          }
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
