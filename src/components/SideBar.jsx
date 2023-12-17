import { useState } from "react";
import Filter from "./Filter";

const SideBar = () => {
  const [dropdowns, setDropdowns] = useState({
    idealFor: { isOpen: false, options: ["Men", "Women", "Baby & Kids"] },
    occasion: { isOpen: false, options: [] },
    work: { isOpen: false, options: [] },
    fabric: { isOpen: false, options: [] },
    segment: { isOpen: false, options: [] },
    suitableFor: { isOpen: false, options: [] },
    rawMaterial: { isOpen: false, options: [] },
    pattern: { isOpen: false, options: [] },
  });

  const toggleDropdown = (dropdownKey) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownKey]: {
        ...prevDropdowns[dropdownKey],
        isOpen: !prevDropdowns[dropdownKey].isOpen,
      },
    }));
  };
  return (
    <div className=" p-4 relative">
      <div className="mb-4">
        <input type="checkbox" />
        <label className="ml-2 font-semibold">CUSTOMIZABLE</label>
      </div>
      {Object.entries(dropdowns).map(([key, value]) => (
        <Filter
          key={key}
          label={key.toUpperCase()}
          options={value.options}
          isOpen={value.isOpen}
          toggleDropdown={() => toggleDropdown(key)}
        />
      ))}
    </div>
  );
};

export default SideBar;
