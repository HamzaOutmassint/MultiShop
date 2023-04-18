import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import StorageIcon from '@mui/icons-material/Storage';
import FilterSide from '../FilterSide/FilterSide';
import AppsIcon from '@mui/icons-material/Apps';
import Skeleton from '@mui/material/Skeleton';
import { Drawer, Box } from '@mui/material'
import { useState } from "react";
import Cart from "../cart/Cart";
import "./products.css";


var  data 
function Products({page,handlProduct,filterBySize,filterByType,brands,productsData,Error}){
  const [style,setStyle] = useState("firstStyle")
  const [countFilter, setCountFilter] = useState(0)

  /*---------- this state for the sidebar in -------------*/
  const [open, setOpen] = useState(false);
  /*------------------------------end----------------------------------- */

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
 
  const filterProducts =(ele,title)=>{
    if(ele==="jacket"){
      data = productsData.filter(item =>(
        item.product_name === ele
      ))
      setCountFilter(countFilter + 1 )
    }else if(ele==="all products"){
      data = [...productsData]
      setCountFilter(countFilter + 1 )
    }else{
      data = productsData.filter(item =>(
        item[title] === ele
      ))
      setCountFilter(countFilter + 1 )
    }
  }
  const filterByPrice =(min,max)=>{
    data = productsData.filter(item =>(
      parseInt(item.product_price) >= parseInt(min) && parseInt(item.product_price) <= parseInt(max)
    ))
    setCountFilter(countFilter + 1 )
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
            <button className='filter-title nb-pro' onClick={()=>setOpen(true)}>
              <FilterListRoundedIcon style={{"fontSize":"24px" , "marginRight":"5px"}}/> 
              <span>Filter</span>
            </button>
            <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
              <Box p={2} width='270px' textAlign='center' role='presentation'>
              <FilterSide
                handlProduct={handlProduct} 
                filterByType={filterByType} 
                filterBySize={filterBySize}
                brands={brands}
                filterProducts={filterProducts}
                filterByPrice={filterByPrice}
                productsData={productsData}
                newClassForSideBar="sidebarInFilterMethod"
              />
              </Box>
            </Drawer>
            <span className="nb-pro"> <span> {countFilter === 0 ? productsData.length : data.length}</span> Products</span>
            <h6>{page}</h6>
            <div className="Product-style">
              <span>View as</span>
              <StorageIcon sx={{ fontSize: 30 }} className="storage-icon" onClick={handlSecondProductStyle}/>
              <AppsIcon sx={{ fontSize: 30 }} className="app-icon Active" onClick={handlFirstProductStyle} />
            </div>
          </div>
          <div  className={style==="firstStyle"?"productsInFirstStyle":"productsInSecondStyle"}> 
            {
              countFilter === 0 
              ?
                Error !== "Network Error"
                ?
                  productsData.length === 0 
                  ? 
                    <div className="empty">
                      <span>There is no products</span>
                    </div>
                  :
                    <>
                    {
                      productsData.map((ele)=>(
                        <Cart 
                          details={ele} 
                          key={ele.product_id}
                          style={style}
                        />    
                      )) }
                      {
                        productsData.length >= 6 ? <div className="noMoreItems"><span>NO MORE PRODUCTS</span></div> : null
                      }
                    </>
                :
                  <div className="empty">
                    <span>{Error}, Please try again later.</span>
                  </div> 
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
                          style={style}
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