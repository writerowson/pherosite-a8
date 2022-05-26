
import './App.css';
import GoodFoods from './Components/GoodFoods/GoodFoods';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theory from './Components/Theory/Theory';
import { Spinner } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className='p-3'></header>
      <h1 className='text-danger mb-5'>Good Foods</h1>
      <GoodFoods></GoodFoods>
      <Theory></Theory>

      <footer className='p-3 mt-5'> Copyright © 2022 goodfood.com</footer>
    </div>
  );
}

export default App;
