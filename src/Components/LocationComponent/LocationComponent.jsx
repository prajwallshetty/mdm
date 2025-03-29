import './LocationComponent.css';

const LocationComponent = () => {
    return (
        <>
            <div className="location">
                <h2>LOCATION</h2>
                
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4395.2091383315965!2d74.86845608580361!3d12.952277687209504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d45819abf1%3A0xec9cf13e2e0ad60c!2sShree%20Devi%20Institute%20Of%20Technology!5e1!3m2!1sen!2sin!4v1731838648956!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shree Devi Institute of Technology Location"
      ></iframe>
            </div>
        </>
    )

}
export default LocationComponent;