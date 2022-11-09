import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Symbols = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag of {currentDisplay.name.official}:</h2>
        {currentDisplay.flags && (
          <img
            alt={`${currentDisplay.name.official} flag`}
            src={currentDisplay.flags.png}
          />
        )}
      </div>
      <div className="stack">
        <h2>Coat of Arms of {currentDisplay.name.official}:</h2>
        {currentDisplay.coatOfArms && (
          <img
            alt={`${currentDisplay.name.official} coat of arms`}
            src={currentDisplay.coatOfArms.png}
          />
        )}
      </div>
    </div>
  );
};

export default Symbols;
