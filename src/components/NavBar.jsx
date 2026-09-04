import eye from "../assets/bbd.png";

function NavBar() {
  return (
    <>
      <div className="flex border-solid flex-row w-full gap-2   h-20 p-7 ">
        <div className="flex flex-row">
          <a href="/">
            <h1 className="font-bold hover:text-red-500 hover:underline whitespace-nowrap">
              Big Brother Doro
            </h1>
          </a>
        </div>
        <img className="" src={eye} />
        <div className="hover:text-red-500 hover:underline  h-8  ml-270">
          <a href="/Inspiration">Inspiration</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
