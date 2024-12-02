import { useState } from "react";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <header className="bg-black py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">TheHotelOrbit</h1>
        <div>
          <button
            className={`${
              activeButton === 'login'
                ? 'bg-white text-black hover:bg-gray-300'
                : 'bg-black hover:bg-gray-800 text-white'
            } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </button>
          <button
            className={`${
              activeButton === 'signup'
                ? 'bg-white text-black hover:bg-gray-300'
                : ' text-white'
            } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4`}
            onClick={() => handleButtonClick('signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;