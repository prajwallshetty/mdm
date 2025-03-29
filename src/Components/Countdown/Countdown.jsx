import React from 'react';
import '../Countdown/Countdown.css'
 
function Countdown() {
    const [time, setTime] = React.useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    React.useEffect(() => {
        const target = new Date('2025-05-08T00:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            if (difference < 0) {
                setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                clearInterval(interval);
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setTime({
                days: d.toString().padStart(2, '0'),
                hours: h.toString().padStart(2, '0'),
                minutes: m.toString().padStart(2, '0'),
                seconds: s.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="middle">
            <div className='bg-box'>
                <div className="label">Sambhram Begins Now!</div>
                <div className="sublabel">Get ready for an incredible journey of celebration and joy!</div>
                {/* <div className="time">
                    <span>
                        <div><p>{time.days}</p>Days</div>
                        <p>:</p>
                    </span>
                    <span>
                        <div><p>{time.hours}</p>Hours</div>
                        <p>:</p>
                    </span>
                    <span>
                        <div><p>{time.minutes}</p>Minutes</div>
                        <p>:</p>
                    </span>
                    <span>
                        <div><p>{time.seconds}</p>Seconds</div>
                    </span>

                    <p>Get ready for an incredible journey of celebration and joy!</p>
                </div>
                <div className="sublabel">Get ready for an incredible journey of celebration and joy!</div> */}
            </div>
        </div>
    );
}

export default Countdown;
