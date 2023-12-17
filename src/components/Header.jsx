import { Navbar } from "./Navbar";
import logo from "../assets/logo.png";
import searchImg from "../assets/search-normal.png";
import wishlistImg from "../assets/wishlist.png";
import cartImg from "../assets/cart.png";
import profileImg from "../assets/profile.png";
import languageImg from "../assets/language.png";

const Header = () => {
  return (
    <>
      <header className="">
        <div className=" bg-black text-rose-700 flex justify-between">
          <span> Lorem ipsum dolor sit amet.</span>
          <span> Lorem ipsum dolor sit amet.</span>
          <span> Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="m-4">
              <img src={logo} alt="" className="w-8 h-8" />
            </div>
          </div>
          <span className="text-3xl font-bold">LOGO</span>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <img src={searchImg} alt="" className="mr-4" />
              <img src={wishlistImg} alt="" className="mr-4" />
              <img src={cartImg} alt="" className="mr-4" />
              <img src={profileImg} alt="" className="mr-4" />
              <img src={languageImg} alt="" className="mr-4" />
            </div>
          </div>
        </div>
      </header>
      <Navbar />
      <hr />
    </>
  );
};

export default Header;
