import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPotentials } from '../redux/slices/potentialCountriesSlice';
import { setDisplayCountry } from '../redux/slices/displayCountrySlice';

const OptionDisplay = () => {
  const dispatch = useDispatch();
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  return (
    <div className="stack">
      {currentPotentials.map((elem, ind) => {
        return (
          <h2 onClick={dispatch(setDisplayCountry(currentPotentials[ind]))}>
            {elem.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
