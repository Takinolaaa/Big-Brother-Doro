import { useState } from "react";
import close from "../assets/close.png";

function Modal({ content }) {
  const [closed, setClosed] = useState(false);

  function handleclick() {
    setClosed(true);
  }
  return (
    <>
      {" "}
      {!closed && (
        <div className="flex  inset-0 justify-center items-center absolute  bg-black/50 backdrop-blur-sm  text-center  ">
          <div className="bg-white p-2  border-2  h-96 w-96  border-gray-300 rounded-2xl ">
            <div className=" p-4 gap-2 flex flex-row">
              {" "}
              {/* <h1> Time is Finished! </h1> */}
              <img
                className="hover:bg-gray-300  hover:rounded-full ml-80 hover:rounded- h-6 w-6"
                onClick={handleclick}
                src={close}
              />
            </div>

            <h1> Time is Finished! </h1>
            <p>You can go on break now but dont take too long</p>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
