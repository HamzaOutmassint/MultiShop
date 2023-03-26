// import { AccessoriesProductsContext, MenProductsContext, WomenProductsContext } from '../../component/Context/ContextFile'
import { Sizes , brands , Departments } from '../../component/fuctions'
import CustomSeparator from '../../component/breadcrumbs/breadcrumbs'
import Products from '../../component/products/products';
import handlProduct from "../../component/fuctions";
import { useState ,  useEffect} from 'react'
import axios from "axios";

export const CategoryPage = ({get}) => {
    const [MenProducts,setMenProducts] = useState([])
    const [WomenProducts,setWomenProducts] = useState([])
    const [AccessoriesProducts,setAccessoriesProducts] = useState([])
    const [style,setStyle] = useState("firstStyle")


    /*-------------------------------------------get data from database----------------------------------- */

    useEffect(()=>{
        if(get==="Men"){
            // to get all men products from database
            axios.get('http://localhost/data/Men.php').then((response) => {
                setMenProducts(response.data);
            }).catch((error)=> {
                console.log(error);
            });
        }else if(get==="Women"){
            // to get all women products from database
            axios.get('http://localhost/data/Women.php').then((response) => {
                setWomenProducts(response.data);
            }).catch((error)=> {
                console.log(error);
            });
        }else{
            // to get all accessories products from database
            axios.get('http://localhost/data/accesories.php').then((response) => {
                setAccessoriesProducts(response.data);
            }).catch((error)=> {
                console.log(error);
            });
        }
    }, []);

    /*-------------------------------------------(end)get data from database----------------------------------- */


    /*-------------------------this functions it's for switch between firstStyle and secondStyle--------------------*/
    const handlFirstProductStyle = ()=>{
        document.querySelector(".Product-style .app-icon").setAttribute("class","MuiSvgIcon-root MuiSvgIcon-fontSizeMedium app-icon Active css-bq05nv-MuiSvgIcon-root")
        document.querySelector(".Product-style .storage-icon").setAttribute("class",".MuiSvgIcon-root MuiSvgIcon-fontSizeMedium storage-icon css-bq05nv-MuiSvgIcon-root")
        setStyle("firstStyle")
    }
    const handlSecondProductStyle = ()=>{
        document.querySelector(".Product-style .storage-icon").setAttribute("class",".MuiSvgIcon-root MuiSvgIcon-fontSizeMedium storage-icon Active css-bq05nv-MuiSvgIcon-root")
        document.querySelector(".Product-style .app-icon").setAttribute("class","MuiSvgIcon-root MuiSvgIcon-fontSizeMedium app-icon css-bq05nv-MuiSvgIcon-root")
        setStyle("secondStyle")
    }
    /*-----------------------------------------------------end--------------------------------------------------------*/


    if(get==="Men"){
        return (
          <>
          <CustomSeparator Get="Men"/>
          <Products 
            page="Men"
            handlProduct={handlProduct} 
            filterByType={Departments} 
            filterBySize={Sizes}
            brands={brands} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            productsData={MenProducts}
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
            brands={brands} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            productsData={WomenProducts}
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
            brands={brands} Style={style} 
            handlSecondProductStyle={handlSecondProductStyle} 
            handlFirstProductStyle={handlFirstProductStyle}
            productsData={AccessoriesProducts}
          />
          </>
        )
    }
}