import React from "react";
import calendar from "../images/time-and-calendar.png";
import florIz from "../images/florIz.png"


function Body2() {
  return (
    <div className="flex flex-col bodyLanding place-content-center">
      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm mt-5">
        Código de Vestimenta
      </h1>
      <p className="text-center montserrat-400 mb-2 text-sm ml-5 mr-5 mt-4">
        Vestimenta Formal
      </p>
      <div className="flex justify-center place-content-center">
        <img src={florIz} alt="flor deco" className="h-24 m-5" />
      </div>

      <div className="flex justify-center place-content-center mt-2">
        <img src={calendar} alt="calendar" className="h-16 w-16" />
      </div>

      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm">
        Agenda la fecha
      </h1>
      <p className="text-center montserrat-400  mt-5 mb-2 m-5 text-sm">
        Haciendo click en el siguiente enlace agrega la fecha a tu calendario
      </p>
      <div className="flex justify-center mt-3">
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2UzcDJlMDRmMTM1ajVvZmg2dHN2YzJ0czQgMTM3N2E4MGJiZTZmZGU4NzY0Y2JkZmViNTRkMWQyODkxZGZmMDU3YmIxNWNiOTdjYWEwMjg4OWEzMzFjYmVjM0Bn&tmsrc=1377a80bbe6fde8764cbdfeb54d1d2891dff057bb15cb97caa02889a331cbec3%40group.calendar.google.com"
          class="px-4 py-1 text-sm mb-5 text-white montserrat-400 rounded-full drop-shadow-md bg-indigo-200 border-indigo-200 hover:text-indigo-200 hover:bg-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
        >
          AGENDAR
        </a>
      </div>
    </div>
  );
}

export default Body2;
