import {AllProductsContext , MenProductsContext , WomenProductsContext ,AccessoriesProductsContext} from "./component/Context/ContextFile";
import { BrowserRouter ,Routes ,Route  } from "react-router-dom";
import { CategoryPage } from "./pages/categoryPage/CategoryPage";
import Navbar from "./component/navbar/Navbar";
import {useState , useEffect} from "react"
import Home from "./pages/home/Home";
import axios from "axios";
import "./app.css"


function App() {
  const [AllProducts,setAllProducts] = useState([])
  const [MenProducts,setMenProducts] = useState([])
  const [WomenProducts,setWomenProducts] = useState([])
  const [AccessoriesProducts,setAccessoriesProducts] = useState([])
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
  
  // to get all men products from database
  useEffect(()=>{
    axios.get('http://localhost/data/Men.php').then((response) => {
      setMenProducts(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, [reloadInChangesForWishlist]);

  // to get all women products from database
  useEffect(()=>{
    axios.get('http://localhost/data/Women.php').then((response) => {
      setWomenProducts(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, [reloadInChangesForWishlist]);

  // to get all accessories products from database
  useEffect(()=>{
    axios.get('http://localhost/data/accesories.php').then((response) => {
      setAccessoriesProducts(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, [reloadInChangesForWishlist]);
  /*-------------------------------------------(end)get data from database----------------------------------- */

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AllProductsContext.Provider value={AllProducts}>
      <MenProductsContext.Provider value={MenProducts}>
      <WomenProductsContext.Provider value={WomenProducts}>
      <AccessoriesProductsContext.Provider value={AccessoriesProducts}>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/men" element={<CategoryPage get="Men" />} />
            <Route exact path="/women" element={<CategoryPage get="Women" />} />
            <Route exact path="/accessories" element={<CategoryPage get="Accessories" />} />
        </Routes>
      </AccessoriesProductsContext.Provider>
      </WomenProductsContext.Provider>
      </MenProductsContext.Provider>
      </AllProductsContext.Provider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
