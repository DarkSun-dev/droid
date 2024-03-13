import { Route, Routes } from "react-router-dom"
import './assets/css/App.css'
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import Loger from "./pages/Loger"
import ErrorPage from "./pages/ErrorPage"


const App = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setUser({ usename: 'Student', studentID: '202305042', role: 'student' })
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])


  return (
    <div className="container">
      <Routes>
        <Route path='/' element={loading ? <Loger /> : <Home user={user}/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
