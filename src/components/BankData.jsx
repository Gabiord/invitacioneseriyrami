import React from "react";
import box from "../../src/images/imagepruebaj.jpg";
import Swal from "sweetalert2";
import regalo from "../images/tarjeta-de-regalo.png";
import florDe from "../images/florDe.png";
import confirmar from "../images/etiqueta-de-nombre.png"

function BankData() {
  const press = () => {
    Swal.fire({
      title: "Cuentas",
      html: `<p className="montserrat-400 text-center mt-5">
      Banco Itau 
Caja de Ahorro USD: 1773172
Titular Ramiro Tomasina
</p>
<br>
<p>
Banco Itau 
Caja Ahorro $UY: 0283233
Titular Erika Del Pozo
</p>
<br>
<p>
Banco Pichincha
(ECUADOR)
Cuenta Ahorro USD: 2200523806
Titular Erika Del Pozo</p>
    `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <div className="flex flex-col place-content-center bodyLanding">
      <div className="flex justify-center">
        <img src={box} alt="box" className="w-screen mb-5 mt-5" />
      </div>
      <div className="flex justify-center place-content-center mb-5">
        <img src={regalo} alt="regalo" className="h-10" />
      </div>


      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm mt">
        Regalos
      </h1>
      <p className="text-center montserrat-400 m-5 text-sm">
        Su presencia es nuestro mejor regalo, pero si quieren tener un detalle
        con nosotros pueden sumar kilómetros a nuestra luna de miel...
      </p>
      <div className="flex justify-center mb-5">
        <button
          onClick={press}
          type="Button"
          class="px-4 py-1 text-sm text-white montserrat-400 rounded-full drop-shadow-md bg-indigo-200 border-indigo-200 hover:text-indigo-200 hover:bg-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
        >
          REGALOS
        </button>
      </div>



      <div className="flex justify-center place-content-center mt-5 mb-5">
        <img src={florDe} alt="flor deco" className="h-24" />
      </div>
      {/* <div className="flex justify-center place-content-center mb-5">
        <img src={confirmar} alt="Confirmar Asistencia" className="h-16" />
      </div> */}
      <h1 className="text-center pinyon-script-regular text-4xl text-indigo-200 drop-shadow-sm">
        Confirma tu asistencia
      </h1>
      <p className="text-center montserrat-400 mt-5 mb-5 text-sm">
      Por favor confirmar asistencia antes del 8 de agosto.
      </p>
      <div className="flex justify-center mb-10">
        <a
          target="_blank"
          href="https://forms.gle/BSgrzB2mmKyhnkSw6"
          class="px-4 py-1 text-sm text-white montserrat-400 rounded-full drop-shadow-md bg-indigo-200 border-indigo-200 hover:text-indigo-200 hover:bg-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 mb-5"
        >
          CONFIRMAR ASISTENCIA
        </a>
      </div>
    </div>
  );
}

export default BankData;
