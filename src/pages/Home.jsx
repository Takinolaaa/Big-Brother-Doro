import Timer from "../components/Timer.jsx";
import Eyeball from "../components/Eyeball.jsx";
import Lefteye from "../components/Lefteye.jsx";
import Navbar from "../components/NavBar.jsx";
import Modal from "../components/Modal.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" h-220 flex flex-row p-4 gap-4 justify-center border-b-gray-500 ">
        <div className="   rounded-2xl text-center text-3xl p-4  border-gray-300 ">
          {/* <Eyeball /> */}
        </div>
        <div className="flex  p-4   justify-center">
          <Timer />
        </div>
        <div className="  rounded-2xl text-center text-3xl p-4  border-gray-300 ">
          {/* <Lefteye /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
