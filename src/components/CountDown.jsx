import React, { useState, useEffect } from "react";

function CountDown() {

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownDate = new Date('2024-10-04T20:30:00Z').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex text-zinc-50 place-content-around bodyLanding">
      <div className="flex flex-col w-11/12 h-5/6 mt-10 place-content-center drop-shadow-md bg-indigo-100">
      <p className="text-center montserrat-400 text-4xl text-white drop-shadow-sm mt-10">Viernes, 4 de octubre de 2024</p>
      <p className="text-center montserrat-400 text-indigo-400 text-sm m-7">Nos llena de alegría compartir nuestro amor con ustedes. Los invitamos a celebrar juntos el día mas especial de nuestras vidas.</p>
      <div className="grid grid-cols-2 gap-4 m-8 -mt-2 place-content-center place-items-center p-3">
        <div className="flex flex-col text-center bg-blue-gray-50 drop-shadow-md w-20 h-20 place-content-center ">
          <p className="montserrat-600  text-gray-900">{countdown.days}</p>
          <p className="montserrat-400">DIAS</p>
        </div>
        <div className="flex flex-col text-center bg-blue-gray-50 w-20 drop-shadow-md h-20 place-content-center">
          <p className="montserrat-600 text-gray-900">{countdown.hours}</p>
          <p className="montserrat-400">HRS</p>
        </div>
        <div className="flex flex-col text-center bg-blue-gray-50 drop-shadow-md w-20 h-20 place-content-center">
          <p className="montserrat-600  text-gray-900">{countdown.minutes}</p>
          <p className="montserrat-400">MIN</p>
        </div>
        <div className="flex flex-col text-center bg-blue-gray-50 drop-shadow-md w-20 h-20 place-content-center">
          <p className="montserrat-600 text-gray-900">{countdown.seconds}</p>
          <p className="montserrat-400">SEG</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CountDown;
