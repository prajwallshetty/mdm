import { useState } from "react";

const Otpsection = ()=>{

    const [otp, setOtp] = useState(["", "", "", ""]);
    const handleOtpChange = (e, index) => {
        const value = e.target.value;
    
        if (!isNaN(value) && value.length <= 1) {
          let newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
          if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
          }
        }
      };

      const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '') {
          if (index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
          }
        }
      };

      const getOtpValue = () => otp.join("");
      
    return(
        <div className="otp-section">
            <h2>Enter the OTP</h2>
            <div className="otp-input">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <p>Enter the OTP sent to your mobile number. <br /><br /><br />The OTP is valid for 60 seconds.</p>
            <p className='p2'>Didn't receive the OTP? <button>Resend OTP</button></p>
          </div>
    )
}

export default Otpsection