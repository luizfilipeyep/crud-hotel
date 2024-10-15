import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import AddClient from "./pages/AddClient/AddClient"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/addClient" element={<AddClient />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
