import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Homepage from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Board from './Pages/Boards';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/reg" element={<Register/>}/>
      <Route path="/board" element={<Board/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
