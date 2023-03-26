import StorageIcon from '@mui/icons-material/Storage';
// import FilterSide from "../FilterSide/FilterSide"
import FilterSide from '../FilterSide/FilterSide';
import AppsIcon from '@mui/icons-material/Apps';
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import Cart from "../cart/Cart";
import "./products.css";


var  data 
function Products({page,handlProduct,filterBySize,filterByType,brands,handlFirstProductStyle,handlSecondProductStyle,Style,productsData}){
  const [count, setCount] = useState(0)
  const filterProducts =(ele,title)=>{
    if(ele==="jacket"){
      data = productsData.filter(item =>(
        item.product_name === ele
      ))
      setCount(count + 1 )
    }else if(ele==="all products"){
      data = [...productsData]
      setCount(count + 1 )
    }else{
      data = productsData.filter(item =>(
        item[title] === ele
      ))
      setCount(count + 1 )
    }
  }
  const filterByPrice =(min,max)=>{
    data = productsData.filter(item =>(
      parseInt(item.product_price) >= parseInt(min) && parseInt(item.product_price) <= parseInt(max)
    ))
    setCount(count + 1 )
  } 

  return (
    <div className='container-fluid menPage'>
      <div className="men-products container mt-4">
        <FilterSide
          handlProduct={handlProduct} 
          filterByType={filterByType} 
          filterBySize={filterBySize}
          brands={brands}
          filterProducts={filterProducts}
          filterByPrice={filterByPrice}
          productsData={productsData}
        />
        <div className="section-right">
          <div className="title">
            <span className="nb-pro"> <span> {count === 0 ? productsData.length : data.length}</span> Products</span>
            <h6>{page}</h6>
            <div className="Product-style">
              <span>View as</span>
              <StorageIcon sx={{ fontSize: 30 }} className="storage-icon" onClick={handlSecondProductStyle}/>
              <AppsIcon sx={{ fontSize: 30 }} className="app-icon Active" onClick={handlFirstProductStyle} />
            </div>
          </div>
          <div className="products"> 
            {
              count === 0 ?
                productsData.length === 0 
                ? 
                <>
                <div className='text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                <div className=' text-center col-lg-3 col-sm-12'><Skeleton variant="rectangular" sx={{ bgcolor: 'rgb(246 231 231 / 51%)' }} animation="wave" width={"100%"} height={350} /></div>
                </>
                :
                <>
                 {
                  productsData.map((ele)=>(
                    <Cart 
                      details={ele} 
                      key={ele.product_id}
                      Style={Style}
                      page={page}
                    />    
                  )) }
                  {
                    productsData.length >= 6 ? <div className="noMoreItems"><span>NO MORE PRODUCTS</span></div> : null
                  }
                </>
              :  
              data.length === 0 
              ? 
                <div className="empty">
                  <span>There is no products</span>
                </div>
              :
              <>
               {
                 data.map((ele)=>(
                  <Cart
                    details={ele} 
                    key={ele.product_id}
                    Style={Style}
                    page={page}
                  />    
                ))
               }
               {
                  data.length >= 6 ? <div className="noMoreItems"><span>NO MORE PRODUCTS</span></div> : null
                }
              </>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products