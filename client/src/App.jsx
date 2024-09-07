import { BrowserRouter,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./Components/Header"
import FooterComp from "./Components/Footer"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./Components/PrivateRoute"
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute"
import CreatePost from "./pages/CreatePost"
import UpdatePost from "./pages/UpdatePost"
import PostPage from "./pages/PostPage"
import ScrollToTop from "./Components/ScrollToTop"
import Search from "./pages/Search"
import Projects from "./pages/Projects"



function App() {

  return (
   <BrowserRouter>
   <ScrollToTop/>
   <Header/>
   <Routes>
   <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/projects" element={<Projects/>}/>

        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path ='/post/:postSlug' element={<PostPage/>}/>
   </Routes>
   <FooterComp/>
   </BrowserRouter>
  )
}

export default App
