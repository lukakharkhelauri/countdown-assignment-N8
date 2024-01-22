import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor(time % 60);

    const formatNumber = (num) => (num < 10 ? "0" + num : num);

    return `${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};

const CountDown = ({ days, hours, minutes, seconds }) => {
    const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    const [countdown, setCountdown] = useState(totalSeconds);
    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current);
            alert("END");
        }
    }, [countdown]);

    return <div className="CountDown">
                <h2>We're launching soon</h2>
                <p>{formatTime(countdown)}</p>
            </div>
};

export default CountDown;