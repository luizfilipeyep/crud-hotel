import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import AddClient from "./pages/AddClient/AddClient"
import ListClient from "./pages/ListClient/ListClient"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListClient />} />
          <Route path="/addClient" element={<AddClient />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
