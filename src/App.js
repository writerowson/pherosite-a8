
import './App.css';
import GoodFoods from './Components/GoodFoods/GoodFoods';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className='p-3'></header>
      <h1 className='text-danger mb-5'>Good Foods</h1>
      <GoodFoods></GoodFoods>
    </div>
  );
}

export default App;
