import { useState } from "react";
import { Card } from "../components/Card";
import SideBar from "../components/SideBar";

const HomePage = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center mt-16">
        <h1 className="text-4xl font-semibold mb-5">DISCOVER OUR PRODUCTS</h1>
        <p className="w-96 text-gray-700 mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam
          dolor magna aliqua. Ut enim ad
        </p>
      </div>
      <hr />

      <div className="flex justify-around items-center mt-2">
        <button
          className="text-gray-400 underline cursor-pointer"
          onClick={handleClick}
        >
          {visible ? "Hide Filters" : "Show Filters"}
        </button>
        <div className="flex items-center">
          Recommended <span className="ml-2 cursor-pointer">▼</span>
        </div>
      </div>
      <p className="font-bold text-sm mt-2">4085 Items</p>
      <hr />

      <div className="container mx-auto flex flex-col lg:flex-row items-stretch">
        {visible && (
          <div className="lg:w-1/5 h-full">
            <SideBar />
          </div>
        )}

        <div className={`lg:w-4/4 ${visible ? "lg:w-3/4" : "lg:w-full"}`}>
          <Card />
        </div>
      </div>
    </>
  );
};

export default HomePage;
