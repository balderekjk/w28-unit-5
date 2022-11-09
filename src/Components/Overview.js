import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h2>{currentDisplay.name.official}</h2>
      <table className="overview-table">
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((elem, ind, arr) => {
                  if (ind + 1 === arr.length) {
                    return `${elem}`;
                  } else {
                    return `${elem}, `;
                  }
                })
              : 'N/A'}
          </td>
        </tr>
        <tr>
          <td>Capital: </td>
          {currentDisplay.capital
            ? currentDisplay.capital.map((elem) => <td>{elem}</td>)
            : 'N/A'}
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? 'true' : 'false'}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
