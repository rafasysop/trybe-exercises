import './App.css';
import Image from './Image';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const numeros = [1, 2, 3, 4, 5]
function App() {
  
  return (
    <div className="App">
      {
          numeros.map((num) => {
              return task(num)
            })
      }
      <Image source="./img/gato2.jpg" alternativeText="Foto do Gato" />
    </div>
  );
}

export default App;
