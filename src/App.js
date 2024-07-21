import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Slide from './Component/Slidebar/Slide';

function App() {
  return (
  <>
  <div className='grid-container'>
    <Header/>
    <Home/>
    <Slide/>
  </div>
  </>
  );
}

export default App;
