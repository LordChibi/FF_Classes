import logo from './logo.svg';
import './App.css';
import Navigation from './Navbar';
import JobList from './Job';
import AppRoutes from './AppRoutes';
import{Routes,Route} from "react-router-dom"
import Details from "./ClassDetails";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<JobList/>}/>
        <Route path="/ff/classes/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;