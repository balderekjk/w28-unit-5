import './App.css';
import Header from './Components/Header';
import MainDisplay from './Components/MainDisplay';
import OptionDisplay from './Components/OptionDisplay';
import { selectDisplay } from './redux/slices/displayCountrySlice';
import { selectPotentials } from './redux/slices/potentialCountriesSlice';
import { useSelector } from 'react-redux';

function App() {
  let potentials = useSelector(selectPotentials);
  let currentDisplay = useSelector(selectDisplay);
  console.log('potentials', potentials);
  console.log('currentDisplay', currentDisplay);
  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
