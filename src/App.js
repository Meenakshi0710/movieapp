
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shows from "./components/Shows"
import ShowItem from './components/ShowItem';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Shows/>} />
      <Route exact path="/show/:id" element={<ShowDetails/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
