import './App.css';
import Navigation from './Navbar';
import CharaList from './CharaList';
import{Routes,Route} from "react-router-dom"
import Details from "./CharaDetails";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<CharaList/>}/>
        <Route path="/class/:id" element={<CharaList/>}/>
        <Route path="/characters/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
