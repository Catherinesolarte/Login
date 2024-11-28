import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar_Cmp from './components/Navbar';
import Cart from './Components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';

function App() {

  return (
    <>
      <Navbar_Cmp></Navbar_Cmp>
      <Cart></Cart>
      {/*<Home></Home>*/}
      {/*<Register></Register>*/}
      {/*<Login></Login>*/}
      <Footer></Footer>
    </>
  )
}

export default App