import './App.css';
import pokemons from './data';
import Pokemon from './component/Pokemon'
function App() {
  return (
    <div>
      <Pokemon lista={ pokemons }/>
    </div>
  );
}

export default App;
