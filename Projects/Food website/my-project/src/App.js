import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/Regis';
import './App.css';
import Page1 from "./Pages/Page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
