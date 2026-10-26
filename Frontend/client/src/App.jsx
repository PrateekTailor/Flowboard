import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Homepage from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/reg" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
