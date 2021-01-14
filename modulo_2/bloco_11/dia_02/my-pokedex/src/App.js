import './App.css';
import pokemons from './data';
import Pokedex from './component/Pokedex/Pokedex'
import Header from './component/Header/Index';
function App() {
  return (
    <div>
      <Header />
      <Pokedex lista={ pokemons }/>
    </div>
  );
}

export default App;
