import { Routes,Route } from 'react-router';
import './App.css';
import { Home } from './pages/home/home';
import { RestrauntPage } from './pages/restraunt/restrauntPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restraunt/:rID" element={<RestrauntPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
