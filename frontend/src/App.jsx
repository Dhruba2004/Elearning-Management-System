import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Course from "./pages/Courses/Courses"
import Login from "./pages/Login"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/auth" element={<Login/>}/>
      </Routes>

    </Router>
  )
}

export default App
