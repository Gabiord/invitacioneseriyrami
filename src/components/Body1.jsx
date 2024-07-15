import React from "react";
import florDe from "../images/florDe.png"
import florIz from "../images/florIz.png"


function Body1() {
  return (
    <div className="flex flex-col bodyLanding place-content-center">
      <div className="flex justify-center place-content-center mt-10">
        <img src={florDe} alt="flor deco" className="h-24" />
      </div>

      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm">Ceremonia religiosa</h1>
      <p className="text-center montserrat-400 text-indigo-400 m-2 text-lg">20 . 30  HS</p>
      <p className="text-center montserrat-400 mb-2 text-sm">
      Parroquia Sagrada Familia, Capilla Jackson
      </p>
      <div className="flex justify-center mt-3">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Sagrada+Familia,+Montevideo/@-34.8592519,-56.1901582,17z/data=!4m14!1m7!3m6!1s0x95a02aa5a9d8ea11:0x1e04ea132512db1d!2sSagrada+Familia,+Montevideo!8m2!3d-34.8592058!4d-56.1897184!16s%2Fm%2F0v3h6q0!3m5!1s0x95a02aa5a9d8ea11:0x1e04ea132512db1d!8m2!3d-34.8592058!4d-56.1897184!16s%2Fm%2F0v3h6q0?entry=ttu"
          class="px-4 py-1 text-sm mb-5 text-white montserrat-400 rounded-full drop-shadow-md bg-indigo-200 border-indigo-200 hover:text-indigo-200 hover:bg-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
        >
          VER MAPA
        </a>
      </div>

      <div className="flex justify-center place-content-center">
        <img src={florIz} alt="flor deco" className="h-24" />
      </div>

      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm">Recepción</h1>
      <p className="text-center montserrat-400 text-indigo-400 m-2 text-lg">22 . 00  HS</p>
      <p className="text-center montserrat-400  mb-2 text-sm">
      Hotel del Prado. Av. Gabriela Mistral 4223
      </p>
      <div className="flex justify-center mt-3">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Hotel+del+Prado/@-34.8538109,-56.2071485,13z/data=!4m6!3m5!1s0x95a1d54ba4b051a1:0x9c8b69afbf05c032!8m2!3d-34.8550297!4d-56.2070836!16s%2Fg%2F11b7j_csmw?hl=en&entry=ttu"
          class="px-4 py-1 text-sm mb-5 text-white montserrat-400 rounded-full drop-shadow-md bg-indigo-200 border-indigo-200 hover:text-indigo-200 hover:bg-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
        >
          VER MAPA
        </a>
      </div>

      <div className="flex justify-center">

            <div className="flex justify-center place-content-center">
        <img src={florDe} alt="flor deco" className="h-24" />
      </div>
      </div>
    </div>
  );
}

export default Body1;
