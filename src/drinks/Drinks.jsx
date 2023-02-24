import { useContext } from 'react';
import DrinkContext from '../drinkContext';
import './Drinks.css';

export default function Drinks() {
  const drinks = useContext(DrinkContext);
  return (
    <div className="drinks">
      <div className="drinks-head">
        <h2>My First Drinks DB</h2>
        <p>
          Here we will see an assortment of drinks from around the world and
          sample exquisite vintage from across time
        </p>
      </div>
      <div className="drinks-cards">
        {drinks.map((drink) => {
          return (
            <div className="drink" key={drink.id}>
              <div className="drink-head">
                <img src={drink.src} alt={drink.name} id="image" />
                <p>
                  Ingredients:
                  <br />
                  {drink.ingredients}
                </p>
              </div>
              <h3>{drink.name}</h3>
              <p>{drink.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
