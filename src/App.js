import {AddToCartContext, AddToWishlistContext, AllProductsContext, RemoveFromWishlistContext} from "./component/Context/ContextFile";
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
import { Checkout } from "./component/checkout/Checkout";


function App() {
  const [AllProducts,setAllProducts] = useState([])
  const [reloadInChangesForWishlist , setReloadInChangesForWishlist] = useState([])
  const [reloadInChangesForCart , setReloadInChangesForCart] = useState([])
  const getTheCartFromLocalstorage = JSON.parse(localStorage.getItem("cart") || "[]" )
  const [cartItem , setCartItem] = useState(() => {
    return JSON.parse(window.localStorage.getItem("seccess")) === true ? [] : getTheCartFromLocalstorage
  })
  const [wishlist , setWishlist] = useState([])
  
  /*---------------------------------------get all the data from database----------------------------------- */
  useEffect(()=>{
    axios.get('http://localhost/data/AllProducts.php').then((response) => {
      setAllProducts(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, []);
  /*-------------------------------------------(end)get data from database----------------------------------- */
  /*-----------------------------------start methods CRUD (shopping cart)------------------------------------ */

  useEffect(()=>{
    if(JSON.parse(window.localStorage.getItem("seccess")) === true){
      const token = {"token":localStorage.getItem("auth_token")}
      axios.post('http://localhost/data/getTheShoppinCart.php',token).then((response) => {
        setCartItem(response.data)
      }).catch((error)=> {
        console.log(error);
      });
    }else{
      setCartItem(JSON.parse(localStorage.getItem("cart") || "[]" ))
    }
  }, [reloadInChangesForCart]);

  const AddToCart =(item)=>{
    const productItem = cartItem.find(ele=> ele.product_id === item.product_id)
    if(!productItem){	
      if(JSON.parse(window.localStorage.getItem("seccess")) === true ){
        const token = localStorage.getItem("auth_token");
        const product_id = item["product_id"]
        const product_quantity = item["product_quantity"]
        const productInfo = {product_id, product_quantity, token}
        return(
          axios.post('http://localhost/data/shoppingCart.php',productInfo).then((response) => {
            setReloadInChangesForCart([...reloadInChangesForCart , productInfo])
          }).catch((error)=> {
            console.log(error);
          })
        )
      }else{
        setCartItem([...cartItem, item])
        localStorage.setItem("cart",JSON.stringify([...cartItem, item]))
      }
    }else{
      alert("this product is already in shopping cart")
    }  
  }

  const DeleteItemFromTheCart =(id)=>{
    if(JSON.parse(window.localStorage.getItem("seccess")) === true){
      const Item = {id}
      axios.post('http://localhost/data/deleteFromShoppinCart.php',Item).then((response) => {
        setReloadInChangesForCart([...reloadInChangesForCart , Item])
      }).catch((error)=> {
        console.log(error);
      })
    }else{
      const newCartItem = cartItem.filter(ele=> ele.product_id !== id)
      setCartItem(newCartItem)
      localStorage.setItem("cart",JSON.stringify(newCartItem))
    }
  }

  const ClearShopingCart=()=>{
    if(JSON.parse(window.localStorage.getItem("seccess")) === true){
      setCartItem([])
      const Item = {'dalete_all':true}
      axios.post('http://localhost/data/deleteFromShoppinCart.php',Item).then((response) => {
        setReloadInChangesForCart([...reloadInChangesForCart , Item])
      }).catch((error)=> {
        console.log(error);
      })
    }else{
      setCartItem([])
      localStorage.setItem("cart",JSON.stringify([]))
    }
  }

  // increment or decerement the quantity of product
  const handlInecrement=(card_id)=>{
    const IneCartItem = cartItem.map(item=>(
      card_id === item.product_id ? {...item , product_quantity : parseInt(item.product_quantity) + 1} : item
    ))
    setCartItem(IneCartItem)
  }
  const handlDecrement=(card_id)=>{
    const DeCartItem = cartItem.map(item=>(
      card_id === item.product_id ? {...item , product_quantity : item.product_quantity - (item.product_quantity > 1 ?1:0)} : item
    ))
    setCartItem(DeCartItem)
  }

  const logOut=()=>{
    localStorage.clear()
    setCartItem([])
  }
  /*-------------------------------------------end methods CRUD-------------------------------------------- */
  /*-------------------------------------------start methods CRUD (wishlist)------------------------------- */
  
    useEffect(()=>{
      const token = {"token":localStorage.getItem("auth_token")}
      axios.post('http://localhost/data/getTheWishlist.php',token).then((response) => {
        setWishlist(response.data)
      }).catch((error)=> {
        console.log(error);
      });
    }, [reloadInChangesForWishlist]);

    const AddToWishlist =(product_id)=>{
      const productItem = wishlist.find(ele=> ele.product_id === product_id)
      if(!productItem){
        const token = localStorage.getItem("auth_token");
        const Item = {product_id , token}
        return(
          axios.post('http://localhost/data/wishlist.php',Item).then((response) => {
            setReloadInChangesForWishlist([...reloadInChangesForWishlist , Item])
          }).catch((error)=> {
            console.log(error);
          })
        )
      }else{
        alert("this product is already in the wishlist")
      }  
    }

    const DeleteItemFromTheWishlist =(product_id)=>{
      const Item = {product_id}
      axios.post('http://localhost/data/deleteFromWishlist.php',Item).then((response) => {
        setReloadInChangesForWishlist([...reloadInChangesForWishlist , Item])
      }).catch((error)=> {
        console.log(error);
      })
    }

  /*-------------------------------------------end methods CRUD-------------------------------------------- */

  return (
    <>
    <BrowserRouter>
      <Navbar logOut={logOut} cartItem={cartItem} wishlist={wishlist} DeleteItemFromTheCart={DeleteItemFromTheCart}/>
      <AllProductsContext.Provider value={AllProducts}>
        <AddToCartContext.Provider value={AddToCart}>
          <AddToWishlistContext.Provider value={AddToWishlist}>
            <RemoveFromWishlistContext.Provider value={DeleteItemFromTheWishlist}>
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
                                              handlInecrement={handlInecrement} 
                                              handlDecrement={handlDecrement} 
                                              clearShopingCart={ClearShopingCart} 
                                              />} />
                <Route path="wishlist" element={<Wishlist wishlist={wishlist}/>} />
                <Route path="account" element={<Account />} />
                <Route path="manage-your-profiles" element={<ManageProfiel />} />
                <Route path="checkout" element={<Checkout />} />
              </Routes>
            </RemoveFromWishlistContext.Provider>
          </AddToWishlistContext.Provider>
        </AddToCartContext.Provider>
      </AllProductsContext.Provider>
      <Footer logOut={logOut} />
    </BrowserRouter>
    </>
    
  );
}

export default App;
