import {AllProductsContext} from "./component/Context/ContextFile";
import { BrowserRouter ,Routes ,Route  } from "react-router-dom";
import { CategoryPage } from "./pages/categoryPage/CategoryPage";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import {useState , useEffect} from "react"
import Home from "./pages/home/Home";
import axios from "axios";
import "./app.css"
import Product from "./component/product/product";
import Register from "./component/signin/Register";
import Login from "./component/login/Login";
import ViewCart from "./component/viewCart/ViewCart";


function App() {
  const [AllProducts,setAllProducts] = useState([])
  const [reloadInChangesForWishlist] = useState([])
  
  /*-------------------------------------------get data from database----------------------------------- */
  // to get all products from database
  useEffect(()=>{
    axios.get('http://localhost/data/AllProducts.php').then((response) => {
      setAllProducts(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, []);
  /*-------------------------------------------(end)get data from database----------------------------------- */
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AllProductsContext.Provider value={AllProducts}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<CategoryPage get="Men" />} />
          <Route exact path="/women" element={<CategoryPage get="Women" />} />
          <Route exact path="/accessories" element={<CategoryPage get="Accessories" />} />
          <Route path="product" element={<Product />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<ViewCart 
                                        // cartItem={cartItem} 
                                        // DeleteItemFromTheCart={DeleteItemFromTheCart} 
                                        // handlInecrement={handlInecrement} 
                                        // handlDecrement={handlDecrement} 
                                        // clearAll={ClearShopingCart} 
                                        />} />
        </Routes>
      </AllProductsContext.Provider>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
