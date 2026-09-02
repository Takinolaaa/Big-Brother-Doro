import { useState, useEffect, useContext } from "react";

import { MyContext } from "./Timer";

function TabTracker() {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  const isRunning = useContext(MyContext);

  console.log(isRunning);

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden) {
        setTabSwitchCount((prev) => prev + 1);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {tabSwitchCount === 0 ? (
        <div className="invisible font-['Orbitron'] text-center flex-col">
          <h1 className=" font-bold text-red-500"> Big Brother is Watching </h1>
          <h1>Times you looked away: {tabSwitchCount}</h1>
        </div>
      ) : (
        <div className="visible font-['Orbitron'] text-center flex-col">
          <h1 className=" font-bold text-red-500"> Big Brother is Watching </h1>
          <h1>Times you looked away: {tabSwitchCount}</h1>
        </div>
      )}
    </>
  );
}

export default TabTracker;
