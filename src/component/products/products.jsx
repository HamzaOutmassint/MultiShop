import FilterSide from "../FilterSide/FilterSide"
import Cart from "../cart/cart";
import AppsIcon from '@mui/icons-material/Apps';
import StorageIcon from '@mui/icons-material/Storage';
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';


var  data 
function Products({page,handlProduct,ProductBySize,ProductByType,brands,handlFirstProductStyle,handlSecondProductStyle,Style,Data}){
  const [count, setCount] = useState(0)
  const filterProducts =(ele,title)=>{
    if(ele==="jacket"){
      data = Data.filter(item =>(
        item.product_name === ele
      ))
      setCount(count + 1 )
    }else if(ele==="all products"){
      data = [...Data]
      setCount(count + 1 )
    }else{
      data = Data.filter(item =>(
        item[title] === ele
      ))
      setCount(count + 1 )
    }
  }
  const filterByPrice =(min,max)=>{
    data = Data.filter(item =>(
      parseInt(item.product_price) >= parseInt(min) && parseInt(item.product_price) <= parseInt(max)
    ))
    setCount(count + 1 )
  } 

  return (
    <div className='container-fluid menPage'>
      <div className="men-products container mt-4">
        <FilterSide 
          handlProduct={handlProduct} 
          ProductByType={ProductByType} 
          ProductBySize={ProductBySize}
          brands={brands}
          filterProducts={filterProducts}
          filterByPrice={filterByPrice}
          Data={Data}
        />
        <div className="section-right">
          <div className="title">
            <span className="nb-pro"> <span> {count === 0 ? Data.length : data.length}</span> Products</span>
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
                Data.length === 0 
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
                  Data.map((ele,index)=>(
                    <Cart 
                      key={index}
                      product_id={ele.product_id}
                      Style={Style} product_image={ele.product_image} 
                      price={ele.product_price} 
                      oldPrice={ele.old_price} 
                      desc={ele.description}
                      name={ele.product_name}
                      page={page}
                      item={ele}
                      favoriteProduct={ele.favorite_product}
                      status={ele.status}
                    />    
                  )) }
                  {
                    Data.length >= 6 ? <div className="noMoreItems"><span>NO MORE PRODUCTS</span></div> : null
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
                 data.map((ele,index)=>(
                  <Cart 
                    key={index}
                    product_id={ele.product_id}
                    Style={Style} product_image={ele.product_image} 
                    price={ele.product_price} 
                    oldPrice={ele.old_price} 
                    desc={ele.description}
                    name={ele.product_name}
                    page={page}
                    item={ele}
                    favoriteProduct={ele.favorite_product}
                    status={ele.status}
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