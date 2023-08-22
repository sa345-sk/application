import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Check from "./Check";
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
         <Route path="/" element={<Check/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
