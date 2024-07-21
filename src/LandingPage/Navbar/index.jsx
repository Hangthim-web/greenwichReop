import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Layout from "./Layout"

const Index = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blogs' element={<Blog/>}/>
            <Route path='contacts' element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}
export default Index