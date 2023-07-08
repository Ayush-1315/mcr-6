import { Routes,Route } from 'react-router';

import { Home } from './pages/home/home';
import { RestrauntPage } from './pages/restraunt/restrauntPage';
import './App.css';

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
