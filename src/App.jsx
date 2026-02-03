/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
import data from "./data.json";

export const App = () => {
  return (
    <div className="App">
      <p>These are the Pokemons</p>
      {data.pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <h4>Types</h4>
          <ul>{pokemon.types.map((type) => (
            <li key={type}>{type}</li>
          ))}
          </ul>
          <h4>Weaknesses</h4>
          <ul>{pokemon.weaknesses.map((weaknesses) => (
            <li key={weaknesses}>{weaknesses}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


