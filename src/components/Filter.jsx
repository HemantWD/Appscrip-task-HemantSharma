const Filter = ({ label, options, isOpen, toggleDropdown }) => {
  return (
    <div className="mb-4">
      <hr className="bg-gray-800 mb-5" />

      <label
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        {label} <span>{isOpen ? "▲" : "▼"}</span>
      </label>
      <p className="mt-2">All</p>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded w-full">
          {options.map((option) => (
            <label
              key={option}
              className="block px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input type="checkbox" className="mr-2" />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
