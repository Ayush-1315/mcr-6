import { Routes,Route } from 'react-router';
import './App.css';
import { Home } from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
