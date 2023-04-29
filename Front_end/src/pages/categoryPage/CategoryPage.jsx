// import { AccessoriesProductsContext, MenProductsContext, WomenProductsContext } from '../../component/Context/ContextFile'
import { Sizes , brands , Departments } from '../../component/fuctions'
import CustomSeparator from '../../component/breadcrumbs/breadcrumbs'
import Products from '../../component/products/products';
import handlProduct from "../../component/fuctions";
import { useState ,  useEffect} from 'react'
import axios from "axios";

export const CategoryPage = ({get}) => {
    const [Error,setError] = useState(null)
    const [MenProducts,setMenProducts] = useState([])
    const [WomenProducts,setWomenProducts] = useState([])
    const [AccessoriesProducts,setAccessoriesProducts] = useState([])

    /*-------------------------------------------get data from database----------------------------------- */

    useEffect(()=>{
        if(get==="Men"){
            // to get all men products from database
            axios.get('http://localhost/data/Men.php').then((response) => {
                setMenProducts(response.data);
            }).catch((error)=> {
                setError(error.message);
            });
        }else if(get==="Women"){
            // to get all women products from database
            axios.get('http://localhost/data/Women.php').then((response) => {
                setWomenProducts(response.data);
            }).catch((error)=> {
                setError(error.message);
            });
        }else{
            // to get all accessories products from database
            axios.get('http://localhost/data/accesories.php').then((response) => {
                setAccessoriesProducts(response.data);
            }).catch((error)=> {
                setError(error.message);
            });
        }
    }, []);

    /*-------------------------------------------(end)get data from database----------------------------------- */

    if(get==="Men"){
        return (
          <>
          <CustomSeparator Get="Men"/>
          <Products 
            page="Men"
            handlProduct={handlProduct} 
            filterByType={Departments} 
            filterBySize={Sizes}
            productsData={MenProducts}
            Error={Error}
          />
          </>
        )
    }else if(get==="Women"){
        return(
          <>
          <CustomSeparator Get="Women"/>
          <Products 
            page="Women"
            handlProduct={handlProduct} 
            filterByType={Departments} 
            filterBySize={Sizes}
            brands={brands}
            productsData={WomenProducts}
            Error={Error}
          />
          </>
        )
    }else if(get==="Accessories"){
        return(
          <>
          <CustomSeparator Get="Accessories"/>
          <Products 
            page="Accessories"
            handlProduct={handlProduct} 
            filterByType={Departments} 
            filterBySize={Sizes}
            brands={brands}
            productsData={AccessoriesProducts}
            Error={Error}
          />
          </>
        )
    }
}
