import logo from './logo.svg';
import './App.css'
import PrimarySearchAppBar from "../src/Components/Navbar"
import {HomePage} from "../src/Components/Home"

function App() {
  return (
    <div className="App">
    < PrimarySearchAppBar />
    < HomePage />
    
    </div>
  );
}

export default App;
