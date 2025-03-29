import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-box">
                    <div className="contact-heading">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-envelope fa-xl"></i><h2>Mail</h2>
                        </div>
                        <div className="contact-element">
                            <p><a href="mailto:shreedevisambhram@gmail.com">shreedevisambhram@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-phone fa-xl"></i><h2>Phone</h2>
                        </div>
                        <div className="contact-element">
                            <p><a href="tel:+91 9741152696">+91 97411 52696</a></p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-location-dot fa-xl"></i><h2>Address</h2>
                        </div>
                        <div className="contact-element">
                            <p><a href="https://maps.app.goo.gl/7a43YpHJBjWbrMLS8" target='_blank'>Shree Devi Institute Of Technology, Kenjar, Near Mangalore International Airport, Karnataka - 574142</a></p>
                        </div>
                    </div>

                    <div className="contact-elements">
                        <div className="contact-element-head">
                            <i className="fa-solid fa-headset fa-xl"></i><h2>Tech Support</h2>
                        </div>
                        <div className="contact-element">
                            <div className="contact-name">
                                <p>Abdulla Shafaz  </p><p><a href="tel:+91 75103 24437">+91 75103 24437</a></p>
                            </div>
                            <div className="contact-name">
                                <p>Abhishek Kulal  </p><p><a href="tel:+91 81050 48276">+91 81050 48276</a></p>
                            </div>
                            <div className="contact-name">
                                <p>Abhin M  </p><p><a href="tel:+91 95626 20848">+91 95626 20848</a></p>
                            </div>
                        </div>

                        <div className="contact-element-head">
                            <i className="fa-regular fa-address-card fa-xl"></i><h2>Registration Support</h2>
                        </div>

                        <div className="contact-name">
                            <p>Chashmitha Kadya  </p><p><a href="tel:+91 93537 33635">+91 93537 33635</a></p>
                        </div>
                        <div className="contact-name">
                            <p>Ajay S  </p><p><a href="tel:+91 70196 76527">+91 70196 76527</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;