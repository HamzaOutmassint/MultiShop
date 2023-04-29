import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './filterSide.css'

function FilterSide({filterBySize,filterByType,filterByPrice,newClassForSideBar,filterProducts}) {
  const [clothesDropDown , setClothesDropDown]= useState(true);
  const [glassesDropDown , setGlassesDropDown]= useState(true);
  var min = document.getElementById("min")
  var max = document.getElementById("max")

  return (
    <nav className="section-left">
      <div className='filter-title'><FilterListRoundedIcon/> <span>Filter by :</span></div>
      <div className={`sidebar  has-scrollbar ${newClassForSideBar}`}>
        <div className="sidebar-category">
          <ul className="sidebar-menu-category-list">
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" onClick={()=>setClothesDropDown(!clothesDropDown)}>
                <div className="menu-title-flex"> <p className="menu-title">Department</p></div>
                <div>
                    {
                        clothesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                    }
                </div>
              </button>
              <ul id="clothes" className={clothesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                <div className='wear-type'>
                  {
                    filterByType.map(ele=>(
                      <Link to={`?department =${ele}`} key={ele} onClick={()=>filterProducts(ele,'department')}>
                        <li>
                            <p>{ele}</p>
                        </li>
                      </Link>
                    ))
                  }
                </div>
              </ul>
            </li>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" onClick={()=>setGlassesDropDown(!glassesDropDown)}>
                <div className="menu-title-flex"><p className="menu-title">Size</p></div>
                <div>
                    {
                        glassesDropDown?<KeyboardArrowUpRoundedIcon />:<KeyboardArrowDownRoundedIcon />
                    }
                </div>
              </button>
              <ul id="glasses" className={glassesDropDown?"sidebar-submenu-category-list active":"sidebar-submenu-category-list"}>
                <div className='wear-size'>
                {
                  filterBySize.map(ele=>(
                    <Link to={`?size =${ele}`} key={ele} onClick={()=>filterProducts(ele,'size')}  >
                      <li>
                          <p>{ele}</p>
                      </li>
                    </Link>
                  ))
                }
                </div>
              </ul>
            </li>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu">
                <div className="menu-title-flex"><p className="menu-title">Prices</p></div>
              </button>
              <div className="price">
                <div>
                  <span>min</span>
                  <input type="number" placeholder="$0.00" id="min" required />
                </div>
                <span style={{ marginBottom: "6px"}}>-</span>
                <div style={{display: "flex" , flexDirection: "column"}}>
                  <span style={{marginLeft: "14px"}}>max</span>
                  <input type="number" placeholder="$0.00" id="max" required />
                </div>
              </div>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={(e)=>{if(min.value==="" || max.value===""){
                  e.preventDefault()
                }else{
                  filterByPrice(min.value,max.value);min.value="";max.value=""
                }}}
                >
                Apply
              </Button>
            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  )
}

export default FilterSide

/* <FilterProduct 
        handlProduct={handlProduct} 
        title="department" 
        mainClass="product-type"
        socendClass="wear-type"
        ProductBy={ProductByType}
        parameter="type"
        filterProducts={filterProducts}
        Data={Data}
        id="s"
        /> *
{/* 
        <FilterProduct 
        handlProduct={handlProduct} 
        title="size" 
        mainClass="product-size"
        socendClass="wear-size"
        ProductBy={ProductBySize}
        parameter="size"
        filterProducts={filterProducts}
        Data={Data}
        id="s"
        />
        
      <FilterProduct 
        handlProduct={handlProduct} 
        title="prices" 
        mainClass="product-brand"
        socendClass="wear-brand"
        ProductBy={brands}
        parameter="brand"
        filterByPrice={filterByPrice}
        Data={Data}
        id="j"
        /> */