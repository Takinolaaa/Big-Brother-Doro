import { useState, useEffect, createContext } from "react";

import pause from "../assets/pause.png";
import play from "../assets/play.png";
import TabTracker from "./Tabtracker.jsx";

export const MyContext = createContext(null);

function Timer() {
  const [totalSeconds, setTotalseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mins, setMins] = useState(0);
  const [secs, setsecs] = useState(0);
  const value = parseInt(mins) * 60 + parseInt(secs);

  const handlethirty = () => {
    setTotalseconds(30 * 60);
    setIsRunning(true);
  };

  const handletwenty = () => {
    setTotalseconds(25 * 60);
    setIsRunning(true);
  };

  const handlefifteen = () => {
    setTotalseconds(15 * 60);
    setIsRunning(true);
  };

  const handlerestart = () => {
    setTotalseconds(0);
    setIsRunning(false);
  };

  const handlecustom = () => {
    setTotalseconds(value);
    setIsRunning(true);
  };
  useEffect(() => {
    // Renders changes on the displayed time clock every second
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTotalseconds((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // stops it from rendering in the back
  }, [isRunning]);

  const minutes = Math.floor(totalSeconds / 60); // converts seconds to minutes
  const seconds = totalSeconds % 60; // takes the remainder

  return (
    <div className="rounded-xl w-fit">
      <div className="flex flex-col border-2 font-['Orbitron'] shadow-xl rounded-xl border-gray-300 p-4 mt-11  h-72 w-96">
        <div className=" flex justify-center gap-1.5 mb-10">
          <button
            onClick={() => handlethirty()}
            className=" bg-red-400 hover:bg-red-600 p-2 rounded-md"
          >
            30 mins
          </button>
          <button
            onClick={() => handletwenty()}
            className=" bg-red-400 hover:bg-red-600 p-2 rounded-md"
          >
            25 mins
          </button>
          <button
            onClick={() => handlefifteen()}
            className=" bg-red-400 hover:bg-red-600 p-2 rounded-md"
          >
            15 mins
          </button>
        </div>
        <div className=" rounded-2xl text-center text-3xl p-4  border-gray-300 ">
          {" "}
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>

        <div className=" flex text-white gap-2  justify-center p-2">
          <button
            onClick={() => setIsRunning(false)}
            className="flex bg-gray-600 justify-center items-center hover:bg-gray-500 p-1 w-20 rounded-md"
          >
            <img src={pause} />
          </button>

          <button
            onClick={() => setIsRunning(true)}
            className="flex bg-gray-600 justify-center items-center hover:bg-gray-500 p-1 w-20 rounded-md"
          >
            <img src={play} />
          </button>
          <button
            onClick={() => handlerestart()}
            className=" bg-gray-600 hover:bg-gray-500 p-2 w-60 rounded-md"
          >
            Restart
          </button>
        </div>

        <div className="flex  justify-center gap-1.5">
          <input
            className="border-2 w-15 p-1 rounded-md  border-gray-300"
            type="number"
            min="0"
            max="60"
            onChange={(e) => setMins(e.target.value)}
            placeholder="00"
          />

          <label className="bold text-2xl">:</label>

          <input
            className="border-2 w-15 p-1 rounded-md  border-gray-300"
            type="number"
            min="0"
            max="59"
            onChange={(e) => setsecs(e.target.value)}
            placeholder="00"
          />

          <button
            onClick={() => handlecustom()}
            className=" text-white bg-black hover:bg-gray-800 p-2 rounded-md"
          >
            Set Timer
          </button>
        </div>
      </div>

      <div className="  justify-center rounded-xl border-gray-300 p-4  h-60 w-96">
        <h1 className="text-center  font-['Orbitron']">
          "Productivity Is Peace"
        </h1>
      </div>
      <MyContext.Provider value={isRunning}>
        <TabTracker />
      </MyContext.Provider>
    </div>
  );
}

export default Timer;
