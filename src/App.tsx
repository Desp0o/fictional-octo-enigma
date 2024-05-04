import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./componetns/navbar/Navbar"

function App() {

  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App
