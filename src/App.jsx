import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Chart from './components/ChartDiagram.jsx'
import Nav from './components/Header.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App