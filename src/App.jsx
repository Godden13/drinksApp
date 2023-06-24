import './App.css';
import { useEffect, useState } from 'react';
import DrinkContext from './drinkContext';
import Drinks from './drinks/Drinks';

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:3000/drinks?apiKey=1')
        .then((res) => res.json())
        .then((res) => {
          setDrinks([...res]);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <DrinkContext.Provider value={drinks}>
        <Drinks />
      </DrinkContext.Provider>
    </div>
  );
}

export default App;
