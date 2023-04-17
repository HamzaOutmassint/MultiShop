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
import Wishlist from "./component/wishlist/Wishlist";
import Account from "./component/account/Account";
import ManageProfiel from "./component/manageProfiel/ManageProfiel";


function App() {
  const [AllProducts,setAllProducts] = useState([])
  // const [reloadInChangesForWishlist , setReloadInChangesForWishlist] = useState([])
  const [reloadInChangesForCart , setReloadInChangesForCart] = useState([])
  const getTheCartFromLocalstorage = JSON.parse(localStorage.getItem("cart") || "[]" )
  const [cartItem , setCartItem] = useState(() => {
    return JSON.parse(window.localStorage.getItem("seccess")) === true ? [] : getTheCartFromLocalstorage
  })
  const [wishlist , setWishlist] = useState([])
  
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

  // method to remove one product from the cart
  const DeleteItemFromTheCart =(item)=>{
    if(JSON.parse(window.localStorage.getItem("seccess")) === true){
      const product_id = item["product_id"]
      const Item = {product_id}
      axios.post('http://localhost/data/deleteFromShoppinCart.php',Item).then((response) => {
        // console.log(response)
        setReloadInChangesForCart([...reloadInChangesForCart , Item])
      }).catch((error)=> {
        console.log(error);
      })
    }else{
      const newCartItem = cartItem.filter(ele=> ele.product_id !== item.product_id)
      setCartItem(newCartItem)
      localStorage.setItem("cart",JSON.stringify(newCartItem))
    }
  }


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
                                        cartItem={cartItem} 
                                        DeleteItemFromTheCart={DeleteItemFromTheCart} 
                                        // handlInecrement={handlInecrement} 
                                        // handlDecrement={handlDecrement} 
                                        // clearAll={ClearShopingCart} 
                                        />} />
          <Route path="wishlist" element={<Wishlist wishlist={wishlist}/>} />
          <Route path="account" element={<Account />} />
          <Route path="manage-your-profiles" element={<ManageProfiel />} />
        </Routes>
      </AllProductsContext.Provider>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
