import './MainAttractions.css';
const MainAttractions = () => {

    return (
        <>
            <div className='main-container'>
                <h2>SPECIAL ATTRACTIONS</h2>
                <div className='hero-container'>

                    <div className="first hero">
                        <img src="Divya kumar.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DIVYA <br /> KUMAR</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>DEC 07 | 2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="second hero">
                        <img src="djraya.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DJ <br/>RAYA</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>DEC 06 | 2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="third hero">
                        <img src="dragon dance.jpg" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>DRAGON <br /> DANCE</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>DEC 06 | 2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>6:30 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="fourth hero">
                        <img src="https://media.istockphoto.com/id/161839324/photo/rock-and-roll.jpg?s=612x612&w=0&k=20&c=eRXcG8hvSVNeIg2424LMPJBkehMpFZTyzRW8JH3btxc=" alt="" className="image" />
                        <div className="text"></div>
                        <div className="main-text">
                            <h3>BATTLE OF <br /> THE BANDS</h3>
                        </div>
                        <div className='date-time'>
                            <div className="date">
                                <p>DEC 06 | 2024</p>
                            </div>
                            <div className="hero-btn">
                                <p>5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainAttractions;