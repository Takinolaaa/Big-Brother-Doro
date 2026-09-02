import eyeball from "../assets/eyeball.gif";

function Lefteye() {
  return (
    <>
      <figure className="w-96 h-72">
        <img className="w-full h-full -scale-x-100" src={eyeball}></img>
      </figure>
    </>
  );
}

export default Lefteye;
