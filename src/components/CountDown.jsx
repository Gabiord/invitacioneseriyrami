import React from "react";

function CountDown() {

  return (
    <div className="flex flex-col bg-blue-400 py-16 text-zinc-50">
      <p className="font-inter text-center">Bienvenidos a nuestra boda</p>
      <div className="flex flex-row m-8">
        <div className="flex flex-col basis-1/6 text-center">
          <p className="font-inter">204</p>
          <p className="font-inter">dias</p>
        </div>
        <p className="font-inter basis-1/6 text-center">:</p>
        <div className="flex flex-col basis-1/6 text-center">
          <p className="font-inter">22</p>
          <p className="font-inter">hs</p>
        </div>
        <p className="font-inter basis-1/6 text-center">:</p>
        <div className="flex flex-col basis-1/6">
          <p className="font-inter">48</p>
          <p className="font-inter">min</p>
        </div>
        <p className="font-inter basis-1/6 text-center">:</p>
        <div className="flex flex-col basis-1/6 text-center">
          <p className="font-inter">04</p>
          <p className="font-inter">seg</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
