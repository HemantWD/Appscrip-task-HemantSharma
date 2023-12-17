import instaImg from "../assets/Insta.png";
import linkedIn from "../assets/linked.png";
import gpayImg from "../assets/gpay.png";
import masterImg from "../assets/master.png";
import paypalImg from "../assets/paypal.png";
import amexImg from "../assets/amex.png";
import appleImg from "../assets/apple.png";
import payImg from "../assets/pay.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between">
        <div className="mb-8 ml-14 text-center lg:text-left lg:mr-8">
          <h2 className="text-2xl font-bold mb-4">BE THE FIRST TO KNOW</h2>
          <p className="mb-2">Sign Up for Updates from abc</p>
          <div className="flex items-center mt-8">
            <input
              type="text"
              placeholder="Enter your email"
              className="mr-2 p-2 w-80 border border-white"
            />
            <button className="bg-inherit border border-gray-700 text-gray-700 px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mr-14 lg:items-start">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">CONTACT US</h2>
            <p className=" text-xs">+44 221 133 5630</p>
            <p className=" text-xs mt-2">customercare@abc.com</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">CURRENCY</h2>
            <p className="text-sm">+ USD</p>
            <p className="text-xs text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex flex-col lg:flex-row justify-around mt-4">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-2">abc</h3>
          <ul className=" text-sm text-gray-400">
            <li className=" mt-3">About Us</li>
            <li className=" mt-3">Stories</li>
            <li className=" mt-3">Artisans</li>
            <li className=" mt-3">Boutiques</li>
            <li className=" mt-3">Contact Us</li>
            <li className=" mt-3">EU Compliances Docs</li>
          </ul>
        </div>

        <div className=" mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-2">QUICK LINKS</h3>
          <ul className=" text-sm text-gray-400">
            <li className=" mt-3">Orders & Shipping</li>
            <li className=" mt-3">Join/Login as a Seller</li>
            <li className=" mt-3">Payment & Pricing</li>
            <li className=" mt-3">Return & Refunds</li>
            <li className=" mt-3">FAQs</li>
            <li className=" mt-3">Privacy Policy</li>
            <li className=" mt-3">Terms & Conditions</li>
          </ul>
        </div>

        <div className="mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-2">FOLLOW US</h3>
          <div className=" flex">
            <img src={instaImg} alt="instagram" className=" mr-3" />
            <img src={linkedIn} alt="linkedin" className=" mr-3" />
          </div>

          <p className=" mt-10">abc ACCEPTS</p>
          <div className="flex mt-4">
            <img src={gpayImg} alt="a" className=" w-13 h-8 mr-4" />
            <img src={masterImg} alt="b" className=" w-13 h-8 mr-4" />
            <img src={paypalImg} alt="c" className=" w-13 h-8 mr-4" />
            <img src={amexImg} alt="d" className=" w-13 h-8 mr-4" />
            <img src={appleImg} alt="e" className=" w-13 h-8 mr-4" />
            <img src={payImg} alt="f" className=" w-13 h-8 mr-4" />
          </div>
        </div>
      </div>
      <p className=" mt-8 text-xs text-center">
        Copyright &copy; 2023 abc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
