import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/wemen' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':ProductId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>

       </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
