import './App.scss';
import NavBar from './components/Static/Navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Static/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import GalleryDetail from './pages/GalleryDetail/GalleryDetail';
import Donaciones from './pages/Donaciones/Donaciones';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import FormPets from './pages/CreateForm/FormPets';
import FormBlog from './pages/CreateForm/FormBlog';
import { PetContextProvider } from './context/context';
import { RequireAuth } from './components/LoginComponent/RequireAuth';
import { JwtContext } from './context/jwtContext';
import Adopcion from './pages/Adopcion/Adopcion';
import ChatBo from './components/Static/ChatBo';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token'));
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className='App'>
        <PetContextProvider>
          <Router>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/gallery' element={<Gallery></Gallery>}></Route>
              <Route
                path='/gallery/:id'
                element={<GalleryDetail></GalleryDetail>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/blog' element={<Blog></Blog>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route
                path='/donaciones'
                element={<Donaciones></Donaciones>}></Route>
              <Route
                path='/adminmascota'
                element={
                  <RequireAuth>
                    <FormPets />
                  </RequireAuth>
                }></Route>
              <Route
                path='/adminmascota/:id'
                element={
                  <RequireAuth>
                    <FormPets />
                  </RequireAuth>
                }></Route>
                <Route
                path='/adminblog'
                element={
                  <RequireAuth>
                    <FormBlog />
                  </RequireAuth>
                }></Route>
                <Route
                path='/adminblog/:id/'
                element={
                  <RequireAuth>
                    <FormBlog />
                  </RequireAuth>
                }></Route>

              <Route path='/login' element={<Login />} />
              <Route path='/adopcion' element={<Adopcion></Adopcion>}></Route>
            </Routes>
            <ChatBo></ChatBo>
            <Footer></Footer>
          </Router>
        </PetContextProvider>
      </div>
    </JwtContext.Provider>
  );
}

export default App;


