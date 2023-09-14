import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './e-project/Home'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/FreeExam" element={<FreeExam />} />
          <Route path="/start" element={<Start/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
