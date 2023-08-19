import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
